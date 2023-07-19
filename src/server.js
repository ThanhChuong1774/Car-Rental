import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3031;

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('user-home.ejs');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})