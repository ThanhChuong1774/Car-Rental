import express from 'express';
import session from 'express-session';
import initAPIRoute from './routers/index';
require('dotenv').config();

require('./connection_database');

const app = express();
const port = process.env.PORT || 3031;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'abcdegf',
    resave: true,
    saveUninitialized: true,
}))

// Init API route
initAPIRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})