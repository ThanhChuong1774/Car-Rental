import express from "express";
import * as controllers from '../controllers';
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isStaffOrAdmin } from "../middlewares/verify_roles";

let router = express.Router();

// PUBLIC ROUTE
router.get('/get-manufacture-years', controllers.getManufactureYears);

// PRIVATE ROUTE
router.use(verifyToken);
router.use(isAdmin);
router.post('/create-new-manufacture-year', controllers.createNewManufactureYear);
router.post('/update-manufacture-year', controllers.updateManufactureYear);


module.exports = router;