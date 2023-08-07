import joi from 'joi';

export const id = joi.required();

export const email = joi.string().pattern(new RegExp('@gmail.com')).required();
export const password = joi.string().min(3).required();
export const full_name = joi.string().required();
export const address = joi.string().required();
export const phone = joi.string().required();
export const CCCD = joi.string().required();
export const role_code = joi.string().required();

export const brand_name = joi.string().required();
export const category_name = joi.string().required();
export const class_name = joi.string().required();
export const color_name = joi.string().required();
export const equipment_name = joi.string().required();
export const fuel_name = joi.string().required();
export const gear_type = joi.string().required();
export const manufacture_year = joi.required();
export const model_name = joi.string().required();
export const price = joi.required();
export const seat_amount = joi.required();
export const status = joi.string().required();

export const brand_id = joi.required();
export const category_id = joi.required();
export const class_id = joi.required();
export const color_id = joi.required();
export const fuel_id = joi.required();
export const gear_id = joi.required();
export const manufacture_year_id = joi.required();
export const model_id = joi.required();
export const price_id = joi.required();
export const seat_id = joi.required();
export const img_link = joi.string().required();
export const is_available = joi.required();

export const equipment_id = joi.required();
export const is_equipped = joi.required();
export const vehicle_condition_id = joi.required();
export const vehicle_condition = joi.required();