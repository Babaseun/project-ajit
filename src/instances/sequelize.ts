import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
});

sequelize.sync({ force: true });
console.log('All models were synchronized successfully.');
