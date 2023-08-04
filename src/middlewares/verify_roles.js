import { notAuth } from "./handle_error";

export const isAdmin = (req, res, next) => {
    const { role_code } = req.user;
    if (role_code != 'R1') { return notAuth('Require role Admin', res) }
    next();
}

export const isStaffOrAdmin = (req, res, next) => {
    const { role_code } = req.user;
    if (role_code != 'R3' && role_code != 'R3') { return notAuth('Require role Staff or Admin', res) }
    next();
}