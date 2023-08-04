import joi from 'joi';

export const email = joi.string().pattern(new RegExp('@gmail.com')).required();
export const password = joi.string().min(3).required();
export const full_name = joi.string().required();
export const address = joi.string().required();
export const phone = joi.string().required();
export const CCCD = joi.string().required();
export const role_code = joi.string().required();