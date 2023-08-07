import express from "express";
import * as controllers from '../controllers';
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isStaffOrAdmin } from "../middlewares/verify_roles";

let router = express.Router();

// PUBLIC ROUTE
router.get('/get-return-vehicle-condition-details', controllers.getReturnVehicleConditionDetails);

// PRIVATE ROUTE
router.use(verifyToken);
router.use(isAdmin);
router.post('/create-new-return-vehicle-condition-detail', controllers.createNewReturnVehicleConditionDetail);
router.post('/update-return-vehicle-condition-detail', controllers.updateReturnVehicleConditionDetail);



module.exports = router;