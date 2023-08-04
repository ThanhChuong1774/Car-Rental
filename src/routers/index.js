import express from 'express';
import userRouter from './userRouter';
import authRouter from './authRouter';
import { notFound } from '../middlewares/handle_error';
import APIController from '../controllers/APIController'

import multer from 'multer';
import path from 'path';
var appRoot = require('app-root-path');

let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(appRoot.path, '/src/public/image/'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });

const initAPIRoute = (app) => {

    app.use('/api/v1/user', userRouter);
    app.use('/api/v1/auth', authRouter);

    // router.get('/', APIController.getHomePage);
    // router.get('/get-all-users', APIController.getAllUsers);
    // router.get('/get-all-cars', APIController.getAllCars);

    // router.get('/get-all-brands', APIController.getAllBrands);
    // router.get('/get-all-categories', APIController.getAllCategories);
    // router.get('/get-all-classes', APIController.getAllClasses);
    // router.get('/get-all-colors', APIController.getAllColors);
    // router.get('/get-all-fuels', APIController.getAllFuels);
    // router.get('/get-all-gears', APIController.getAllGears);
    // router.get('/get-all-manufacture-years', APIController.getAllManufactureYears);
    // router.get('/get-all-models', APIController.getAllModels);
    // router.get('/get-all-prices', APIController.getAllPrices);
    // router.get('/get-all-seats', APIController.getAllSeats);
    // router.get('/get-car-info', APIController.getCarInfo);

    // router.get('/get-all-locations', APIController.getAllLocations);
    // router.get('/get-all-statuses', APIController.getAllStatuses);
    // router.get('/get-all-equipments', APIController.getAllEquipments);
    // router.get('/get-all-vehicle-conditions', APIController.getAllVehicleConditions);

    // router.post('/create-new-car', APIController.createNewCar);
    // router.post('/delete-car', APIController.deleteCar);

    // return app.use('/api/v1/', router);
    app.use(notFound);
}

export default initAPIRoute;