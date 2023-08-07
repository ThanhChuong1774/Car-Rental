import express from "express";
import * as controllers from '../controllers';
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isStaffOrAdmin } from "../middlewares/verify_roles";

let router = express.Router();

// PUBLIC ROUTE
router.get('/get-return-receipts', controllers.getReturnReceipts);

// PRIVATE ROUTE
router.use(verifyToken);
router.use(isAdmin);
router.post('/create-new-return-receipt', controllers.createNewReturnReceipt);
router.post('/update-return-receipt', controllers.updateReturnReceipt);


module.exports = router;