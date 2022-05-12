import { Model, INTEGER, STRING } from 'sequelize';
import method from '../../types/method';
import db from '.';
import Products from './Products';
import Users from './Users';

class Orders extends Model {
  id!: number;
  userId!: number;
  productId!: number;
  method!: method;
}

Orders.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
  productId: {
    type: INTEGER,
    allowNull: false,
  },
  method: {
    type: STRING,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'orders',
  timestamps: false
});

Orders.belongsTo(
  Users,
  { foreignKey: 'id', as: 'user_id' },
);

Orders.hasOne(
  Products,
  { foreignKey: 'id', as: 'order_id' },
);

Orders.belongsTo(
  Products,
  { foreignKey: 'id', as: 'product_id' },
);

Users.hasMany(
  Orders,
  { foreignKey: 'id', as: 'user_id' },
);

Products.hasOne(
  Orders,
  { foreignKey: 'id', as: 'product_id' },
);

Products.belongsTo(
  Orders,
  { foreignKey: 'id', as: 'order_id' },
);


export default Orders;