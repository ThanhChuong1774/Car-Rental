import pool from '../configs/connectDB';
import multer from 'multer';

let getHomePage = async (req, res) => {
    res.send('Hi');
}


let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllCars = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `cars`');
    console.log('>>> check: ', rows.length)
    // for(let i = 0; i < rows.length)
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllBrands = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `brands`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllCategories = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `categories`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllClasses = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `classes`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllColors = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `colors`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllFuels = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `fuels`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllGears = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `gears`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllManufactureYears = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `manufacture_years`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllModels = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `models`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllPrices = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `prices`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllSeats = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `seats`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllLocations = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `locations`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllStatuses = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `statuses`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getCarInfo = async (req, res) => {
    let car_id = 1;
    const [rows, fields] = await pool.execute('SELECT * FROM `cars` WHERE car_id = ?', [car_id]);

    let fuel = await pool.execute('SELECT fuel_name FROM `fuels` WHERE fuel_id = ?', [rows[0].fuel_id]);
    fuel = fuel[0][0].fuel_name;
    let manufacture_year = await pool.execute('SELECT manufacture_year FROM `manufacture_years` WHERE manufacture_year_id = ?', [rows[0].manufacture_year_id]);
    manufacture_year = manufacture_year[0][0].manufacture_year;
    let price = await pool.execute('SELECT price FROM `prices` WHERE price_id = ?', [rows[0].price_id]);
    price = price[0][0].price;
    let seat = await pool.execute('SELECT seat_amount FROM `seats` WHERE seat_id = ?', [rows[0].seat_id]);
    seat = seat[0][0].seat_amount;
    let color = await pool.execute('SELECT color_name FROM `colors` WHERE color_id = ?', [rows[0].color_id]);
    color = color[0][0].color_name;
    let gear_type = await pool.execute('SELECT gear_type FROM `gears` WHERE gear_id = ?', [rows[0].gear_type_id]);
    gear_type = gear_type[0][0].gear_type;
    let brand = await pool.execute('SELECT brand_name FROM `brands` WHERE brand_id = ?', [rows[0].brand_id]);
    brand = brand[0][0].brand_name;
    let model = await pool.execute('SELECT model_name FROM `models` WHERE model_id = ?', [rows[0].model_id]);
    model = model[0][0].model_name;
    let category = await pool.execute('SELECT category_name FROM `categories` WHERE category_id = ?', [rows[0].category_id]);
    category = category[0][0].category_name;
    let class_name = await pool.execute('SELECT class_name FROM `classes` WHERE class_id = ?', [rows[0].class_id]);
    class_name = class_name[0][0].class_name;
    let is_available = rows[0].is_available;
    let car_info = { fuel, manufacture_year, price, seat, color, gear_type, brand, model, category, class_name, is_available };

    return res.status(200).json({
        message: 'ok',
        data: [car_info]
    });
}

let getAllEquipments = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `equipments`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let getAllVehicleConditions = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `vehicle-conditions`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    });
}

let createNewCar = async (req, res) => {
    try {
        let { location, brand, classe, category, color, model, manufacture_year, fuel, gear, seat, price, img_link } = req.body;
        let is_available = 1;

        // Kiểm tra các thông số bị thiếu
        if (!location || !brand || !classe || !category || !color || !model || !manufacture_year || !fuel || !gear || !seat || !price || !img_link) {
            return res.status(400).json({
                message: 'missing required params',
            });
        }

        // Thực hiện INSERT vào database
        await pool.execute(
            'INSERT INTO cars (fuel_id, manufacture_year_id, price_id, seat_id, color_id, gear_type_id, brand_id, model_id, category_id, class_id, img, is_available) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [fuel, manufacture_year, price, seat, color, gear, brand, model, category, classe, img_link, is_available]
        );

        // Trả về kết quả thành công nếu không có lỗi
        return res.status(200).json({
            message: 'Car created successfully.',
        });
    } catch (error) {
        // Xử lý lỗi nếu có lỗi xảy ra trong quá trình thêm dữ liệu vào database
        console.error('Error creating car:', error);
        return res.status(500).json({
            message: 'An error occurred while creating the car.',
        });
    }
};

module.exports = {
    getHomePage,
    getAllUsers, getAllCars,
    getAllBrands, getAllCategories, getAllClasses, getAllColors, getAllFuels, getAllGears, getAllManufactureYears, getAllModels, getAllPrices, getAllSeats,
    getAllLocations, getAllStatuses, getAllEquipments, getAllVehicleConditions,
    getCarInfo,

    createNewCar
}