import express from "express";
import userController from '../controllers/userController';

let router = express.Router();

router.get('/', userController.getUsers);

module.exports = router;