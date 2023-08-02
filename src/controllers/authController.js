import * as services from '../services'

export const register = async (req, res) => {
    try {
        const { email, password, full_name, address, CCCD, phone, role_code } = req.body;
        if (!email || !password || !full_name || !address || !CCCD || !phone) {
            return res.status(404).json({
                err: 1,
                mes: 'Missing payloads'
            })
        }
        const response = await services.register(req.body)
        return res.status(200).json(response);
    } catch (error) {

        return res.status(500).json({
            err: -1,
            mes: 'Internal Server Error'
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json({
                err: 1,
                mes: 'Missing payloads'
            })
        }
        const response = await services.login(req.body)
        return res.status(200).json(response);
    } catch (error) {

        return res.status(500).json({
            err: -1,
            mes: 'Internal Server Error'
        })
    }
}