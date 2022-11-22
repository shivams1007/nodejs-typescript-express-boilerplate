"use strict";
import { Sequelize } from 'sequelize';

const DATABASE: any = process.env.DATABASE;
const USER: any = process.env.DB_USER;
const PASSWORD: any = process.env.DB_PASSWORD;
const HOST: any = process.env.DB_HOST;
const PORT: any = process.env.DB_PORT;
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
    port: PORT,
    pool: {
        max: 25,
        min: 0,
        idle: 10000
    },
    logging: true,
    define: {
        timestamps: false,
    }
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(async function (err) {
    console.log('Unable to connect to the database:', err);
});


const db: any = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db as default };