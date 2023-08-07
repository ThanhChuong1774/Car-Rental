import express from "express";
import * as controllers from '../controllers';
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isStaffOrAdmin } from "../middlewares/verify_roles";

let router = express.Router();

// PUBLIC ROUTE
router.get('/get-delivery-receipts', controllers.getDeliveryReceipts);

// PRIVATE ROUTE
router.use(verifyToken);
router.use(isAdmin);
router.post('/create-new-delivery-receipt', controllers.createNewDeliveryReceipt);
router.post('/update-delivery-receipt', controllers.updateDeliveryReceipt);


module.exports = router;