import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import * as bcrypt from '../../bcrypt';
import Users from '../../database/models/Users'
import { Response } from 'superagent';
import { user } from './mocks/newUser';
import app from '../../app';
import { StatusCode } from '../../enums';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota POST /user', () => {
  let chaiHttpResponse: Response;

  beforeEach(sinon.restore);

  describe('Ao receber inputs válidos', () => {
    it('retorna uma response com o status code e body corretos', async () => {
      sinon.stub(Users, 'findOne')
        .resolves(null);

      sinon.stub(Users, 'create')
        .resolves({ user } as unknown as Users);
      
      sinon.stub(bcrypt, 'hash')
        .resolves(user.hashedPassword);
 
        chaiHttpResponse = await chai
          .request(app)
          .post('/user')
          .send({
            fullName: user.fullName,
            username: user.username,
            email: user.email,
            password: 'superSecret',
          });

          expect(chaiHttpResponse).to.have.status(StatusCode.SUCCESSFULLY_CREATED);

          expect(chaiHttpResponse.body).to.be.an('object');
          expect(chaiHttpResponse.body).to.have.property('user');
          expect(chaiHttpResponse.body.user).to.have.property('role');
          expect(chaiHttpResponse.body.user).to.have.property('points');
          expect(chaiHttpResponse.body.user).to.have.property('fullName');
          expect(chaiHttpResponse.body.user).to.have.property('username');
          expect(chaiHttpResponse.body.user).to.have.property('email');
          expect(chaiHttpResponse.body.user).to.have.property('hashedPassword');
    });
    describe('retorna uma mensagem de erro com o status code e body corretos caso', () => {
      it('receba um email já em uso',  async () => {
        sinon.stub(Users, 'findOne')
          .resolves({ user } as unknown as Users);
          
        sinon.stub(Users, 'create')
          .rejects(null);

        sinon.stub(bcrypt, 'hash')
          .rejects(null);

        chaiHttpResponse = await chai
        .request(app)
        .post('/user')
        .send({
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          password: user.hashedPassword,
        });
        
        expect(chaiHttpResponse.body).to.be.an('object');
        expect(chaiHttpResponse).to.have.status(StatusCode.CONFLICT);
        expect(chaiHttpResponse.body).to.have.property('message');
        expect(chaiHttpResponse.body.message).to.be.equal('E-mail já cadastrado com outro usuário!');
      });
    });
  });
});
