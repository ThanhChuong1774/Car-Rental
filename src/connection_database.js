// import mysql from 'mysql2/promise';

// console.log('Creating connection pool...')

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'car_rental',
// })

// export default pool;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rental_car_web', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const connectionDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectionDatabase();