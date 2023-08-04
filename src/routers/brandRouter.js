import express from "express";
import * as controllers from '../controllers';
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isStaffOrAdmin } from "../middlewares/verify_roles";

let router = express.Router();

// PUBLIC ROUTE
router.get('/', controllers.getBrands);

// PRIVATE ROUTE
// router.get('/', [verifyToken, isAdmin], controllers.getCurrent);
router.use(verifyToken);
// router.use(isAdmin);
router.get('/', controllers.getCurrent);

module.exports = router;