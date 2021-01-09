import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';

export interface ProductAttributes {
  id: string;
  description: string;
  price: number;
  owner_id: string;
}
export interface ProductCreationAttributes
  extends Sequelize.Optional<ProductAttributes, 'id'> {}

export class Product
  extends Sequelize.Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes {
  public id!: string;
  public description!: string;
  public price!: number;
  public owner_id!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
Product.init(
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    owner_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'products',
    sequelize, // passing the `sequelize` instance is required
  }
);
