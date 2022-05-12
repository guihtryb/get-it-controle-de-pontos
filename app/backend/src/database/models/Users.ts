import { Model, INTEGER, STRING } from 'sequelize';
import { Role } from '../../types';
import db from '.';

class Users extends Model {
  id!: number;
  fullName!: string;
  username!: string;
  email!: string;
  password!: string;
  role!: Role;
  points?: number;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: STRING(50),
    allowNull: false,
  },
  username: {
    type: STRING(15),
    allowNull: false,
  },
  email: {
    type: STRING(40),
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
  points: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false
});

export default Users;