import { BOOLEAN } from 'sequelize';
import { Model, INTEGER, STRING, DECIMAL } from 'sequelize';
import db from '.';

class Products extends Model {
  id!: number;
  title!: string;
  price!: number;
  pricePoints!: number;
  image!: string;
  orderId!: number;
  sold!: boolean;
}

Products.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING(30),
    allowNull: false,
  },
  price: {
    type: DECIMAL(10,2),
    allowNull: false,
  },
  pricePoints: {
    type: INTEGER,
    allowNull: false,
  },
  image: {
    type: STRING,
    allowNull: false,
  },
  orderId: {
    type: INTEGER,
    allowNull: true,
  },
  sold: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'products',
  timestamps: false
});

export default Products;