import pool from '../configs/connectDB';

let getHomePage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    console.log('>>> check: ', rows);

    return res.render('user-home', { dataUser: rows[0] });
}

module.exports = {
    getHomePage
}