import { Sequelize } from 'sequelize';
import { DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '../helpers/config';



const sequelize: any = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: DB_PORT,
    pool: {
        max: 25,
        min: 0,
        idle: 10000
    },
    logging: true,
    username: DB_USER,
    password: DB_PASSWORD,
    ssl: true,
    define: {
        timestamps: false,
    }
});


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(async function (err: any) {
    console.log('Unable to connect to the database:', err);
});

export { sequelize as default };
