import express from 'express';
// import session from 'express-session';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './routers/web';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3031;

// Set up view engine
configViewEngine(app);

// Init web route
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})