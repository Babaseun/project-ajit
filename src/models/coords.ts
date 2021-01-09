import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';

export interface CoordinatesAttributes {
  id: number;
  lat: string;
  lng: string;
}

export class Coordinates
  extends Sequelize.Model<CoordinatesAttributes>
  implements CoordinatesAttributes {
  public id!: number;
  public lat!: string;
  public lng!: string;
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
      type: Sequelize.STRING,
      allowNull: false,
    },
    lng: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'coordinates',
    sequelize, // passing the `sequelize` instance is required
  }
);
