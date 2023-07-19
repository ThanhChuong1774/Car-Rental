import express from 'express';
import configViewEngine from './configs/viewEngine';

const app = express();
const port = 3030;

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('user-home.ejs');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})