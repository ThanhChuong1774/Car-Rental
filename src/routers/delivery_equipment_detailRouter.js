import express from "express";
import * as controllers from '../controllers';
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isStaffOrAdmin } from "../middlewares/verify_roles";

let router = express.Router();

// PUBLIC ROUTE
router.get('/get-delivery-equipment-details', controllers.getDeliveryEquipmentDetails);

// PRIVATE ROUTE
router.use(verifyToken);
router.use(isAdmin);
router.post('/create-new-delivery-equipment-detail', controllers.createNewDeliveryEquipmentDetail);
router.post('/update-delivery-equipment-detail', controllers.updateDeliveryEquipmentDetail);


module.exports = router;