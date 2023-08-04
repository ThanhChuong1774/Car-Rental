import express from "express";
import * as controllers from '../controllers';

let router = express.Router();

router.get('/', controllers.insertData);

export default router;