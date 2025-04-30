const axios = require('axios');

class IndexController {
    static async index(req, res, next){
        return res.json({
            status: "success",
            message: "Hello from logic!"
        })
    }

    static async testFetch(req, res, next){
        const response = await axios.get(process.env.MODEL_URL)
        const result = {
            message: response.data
        }

        return res.json({
            result: result
        })
    }
}

module.exports = IndexController