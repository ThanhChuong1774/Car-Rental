import express from "express";
import * as controllers from '../controllers';
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isStaffOrAdmin } from "../middlewares/verify_roles";

let router = express.Router();

// PUBLIC ROUTE
router.get('/get-delivery-vehicle-condition-details', controllers.getDeliveryVehicleConditionDetails);

// PRIVATE ROUTE
router.use(verifyToken);
router.use(isAdmin);
router.post('/create-new-delivery-vehicle-condition-detail', controllers.createNewDeliveryVehicleConditionDetail);
router.post('/update-delivery-vehicle-condition-detail', controllers.updateDeliveryVehicleConditionDetail);



module.exports = router;