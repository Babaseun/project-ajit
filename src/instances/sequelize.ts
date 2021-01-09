import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
});

sequelize.sync();
console.log('All models were synchronized successfully.');
