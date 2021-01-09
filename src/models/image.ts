import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';

export interface ImageAttributes {
  id: string;
  owner_id: string;
  imageId: string;
  coordsId: string;
}
export interface ImageCreationAttributes
  extends Sequelize.Optional<ImageAttributes, 'id'> {}

export class Image
  extends Sequelize.Model<ImageAttributes, ImageCreationAttributes>
  implements ImageAttributes {
  public id!: string;
  public owner_id!: string;
  public imageId!: string;
  public coordsId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
Image.init(
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },

    owner_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    coordsId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imageId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'images',
    sequelize, // passing the `sequelize` instance is required
  }
);
