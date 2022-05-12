import * as sinon from 'sinon';
import * as chai from 'chai';
import app from '../../app';
import chaiHttp = require('chai-http');

import * as bcrypt from '../../bcrypt';
import Users from '../../database/models/Users'
import { Response } from 'superagent';
import { ErrorMessage, StatusCode } from '../../enums';
import { user } from './mocks/user';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota POST /login', () => {
  let chaiHttpResponse: Response;

  beforeEach(sinon.restore);

  describe('Ao receber inputs válidos', () => {
    it('retorna uma response com o status code e body corretos', async () => {
      const bodyCorrectFields = ['user', 'token'];
      const userCorrectFields = Object.keys(user).filter(key => key !== 'password');

      sinon.stub(Users, "findOne")
        .resolves(user as Users);

      sinon.stub(bcrypt, "compare")
        .resolves(true);

        chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: user.email, password: user.password })

      expect(chaiHttpResponse).to.have.status(StatusCode.SUCCESSFULLY_REQUEST);

      expect(chaiHttpResponse.body).to.be.an('object');

      bodyCorrectFields.forEach((correctField) => {
        expect(chaiHttpResponse.body).to.have.property(correctField);
      });

      userCorrectFields.forEach((correctField) => {
        expect(chaiHttpResponse.body.user).to.have.property(correctField);
      });
    });
  });
  describe('Ao receber um inválido', () => {
    const errorMessage = "Senha ou E-mail incorretos!";

    describe('email', () => {
      it('retorna o status 401 com uma mensagem de erro no body' , async () => {
        sinon.stub(Users, "findOne")
        .resolves(null);

        sinon.stub(bcrypt, "compare")
        .resolves(false);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'invalid@test', password: user.password });

        expect(chaiHttpResponse).to.have.status(StatusCode.UNAUTHORIZED);

        expect(chaiHttpResponse.body).to.be.an('object');
        expect(chaiHttpResponse.body).to.have.property('message');

        expect(chaiHttpResponse.body.message).to.be.a('string');
        expect(chaiHttpResponse.body.message).to.be.equal(errorMessage);
      });
    });
    describe('password', () => {
      it('retorna o status 401 com uma mensagem de erro no body' , async () => {
        sinon.stub(Users, "findOne")
        .resolves(null);

        sinon.stub(bcrypt, "compare")
        .resolves(false);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: user.email, password: '' });

        expect(chaiHttpResponse).to.have.status(StatusCode.BAD_REQUEST);

        expect(chaiHttpResponse.body).to.be.an('object');
        expect(chaiHttpResponse.body).to.have.property('message');

        expect(chaiHttpResponse.body.message).to.be.a('string');
        expect(chaiHttpResponse.body.message).to.be.equal(ErrorMessage.BAD_REQUEST);
      });
    });
  });
});
