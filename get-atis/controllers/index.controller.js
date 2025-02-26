class IndexController {
    static async index(req, res, next){
        return res.send("It works")
    }
}

module.exports = IndexController;