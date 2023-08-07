import express from "express";
import * as controllers from '../controllers';
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isStaffOrAdmin } from "../middlewares/verify_roles";

let router = express.Router();

// PUBLIC ROUTE
router.get('/get-return-equipment-details', controllers.getReturnEquipmentDetails);

// PRIVATE ROUTE
router.use(verifyToken);
router.use(isAdmin);
router.post('/create-new-return-equipment-detail', controllers.createNewReturnEquipmentDetail);
router.post('/update-return-equipment-detail', controllers.updateReturnEquipmentDetail);


module.exports = router;