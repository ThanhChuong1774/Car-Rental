import pool from '../configs/connectDB';

let getUserManagementPage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    console.log('>>> check: ', rows);

    return res.render('admin/user-management', { dataUser: rows });
}

module.exports = {
    getUserManagementPage
}