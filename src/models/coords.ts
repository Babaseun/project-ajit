import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';

export interface CoordinatesAttributes {
  id: number;
  lat: number;
  lng: number;
  owner_id: string;
  image_id: string;
}

export class Coordinates
  extends Sequelize.Model<CoordinatesAttributes>
  implements CoordinatesAttributes {
  public id!: number;
  public lat!: number;
  public lng!: number;
  public owner_id!: string;
  public image_id!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
Coordinates.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lat: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lng: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    owner_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'coordinates',
    sequelize, // passing the `sequelize` instance is required
  }
);
