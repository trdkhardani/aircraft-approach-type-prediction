const axios = require('axios');

class IndexController {
    static async index(req, res, next){
        try{
            return res.json({
                status: "success",
                message: "Hello from logic!"
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static async testFetch(req, res, next){
        try{
            const response = await axios.get(process.env.MODEL_URL)
            const result = {
                message: response.data
            }
    
            return res.json({
                result: result
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = IndexController