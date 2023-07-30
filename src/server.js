import express from 'express';
import session from 'express-session';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './routers/web';
import initAPIRoute from './routers/api';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3031;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'abcdegf',
    resave: true,
    saveUninitialized: true,
}))

// Set up view engine
configViewEngine(app);

// Init web route
initWebRoute(app);

// Init API route
initAPIRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})