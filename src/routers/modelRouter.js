import express from "express";
import * as controllers from '../controllers';
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isStaffOrAdmin } from "../middlewares/verify_roles";

let router = express.Router();

// PUBLIC ROUTE
router.get('/get-models', controllers.getModels);

// PRIVATE ROUTE
router.use(verifyToken);
router.use(isAdmin);
router.post('/create-new-model', controllers.createNewModel);
router.post('/update-model', controllers.updateModel);


module.exports = router;