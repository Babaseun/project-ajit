import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';
import { Coordinates } from './coords';
import { Product } from './product';

export interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  isAuthenticated: boolean;
}
export interface UserCreationAttributes
  extends Sequelize.Optional<UserAttributes, 'id'> {}

export class User
  extends Sequelize.Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: string;
  public role!: string;
  public isAuthenticated!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export interface UserViewModel {
  id: string;
  email: string;
}

User.init(
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    firstName: {
      type: Sequelize.STRING(128),
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING(128),
      allowNull: true,
    },
    role: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(128),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(128),
      allowNull: false,
    },
    isAuthenticated: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'users',
    sequelize, // passing the `sequelize` instance is required
  }
);
Product.belongsTo(User, { foreignKey: 'owner_id', onDelete: 'cascade' });
Coordinates.belongsTo(User, { foreignKey: 'owner_id', onDelete: 'cascade' });
