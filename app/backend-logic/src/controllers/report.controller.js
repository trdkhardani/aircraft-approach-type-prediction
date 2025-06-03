const { PrismaClient } = require('../generated/prisma/client');
const prisma = new PrismaClient();

class ReportController {
    static async showLogDetails(req, res, next) {
        try {
            const predictionLogId = req.params.predictionLogId;

            const predictionLog = await prisma.prediction_logs.findUnique({
                where: {
                    prediction_log_id: predictionLogId
                }
            })

            if(!predictionLog){
                throw {
                    statusCode: 404,
                    message: `Prediction log with id ${predictionLogId} not found`
                }
            }

            return res.json({
                status: 'success',
                prediction_log: predictionLog
            })
        } catch(err) {
            if(err.statusCode){
                return res.status(err.statusCode).json({
                    status: 'error',
                    message: err.message
                })
            }
            next(err)
        }
    }
}

module.exports = ReportController;