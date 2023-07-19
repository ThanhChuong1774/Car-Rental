import mysql from 'mysql2/promise';

console.log('Creating connection pool...')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'car_rental',
})

export default pool;


// const connection = require("mssql/msnodesqlv8")

// var config = {
//     server: 'THANHCHUONG',
//     user: 'sa',
//     password: '123',
//     database: 'car-rental',
//     driver: 'msnodesqlv8',
//     option: {
//         trustedConnection: true
//     }
// }

// connection.connect(config, (err) => {
//     if (err) console.log(err);
//     var request = new connection.Request();
//     request.query(
//         'select * from `colors`',
//         function (err, results, fields) {
//             console.log('>>> check mysql: ');
//             console.log(results);
//             console.log(fields);
//         }
//     )
// })