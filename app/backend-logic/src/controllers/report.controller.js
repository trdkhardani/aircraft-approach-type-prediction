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

    static async reportInaccuracy(req, res, next) {
        const {
            predictionLogId,
            supposed_ils,
            supposed_rnav,
            supposed_rnp,
            supposed_visual,
        } = req.body

        try {
            const fileReport = await prisma.prediction_inaccuracies.create({
                data: {
                    prediction_log_id: predictionLogId,
                    prediction_inaccuracy_supposed_ils_label: parseInt(supposed_ils),
                    prediction_inaccuracy_supposed_rnav_label: parseInt(supposed_rnav),
                    prediction_inaccuracy_supposed_rnp_label: parseInt(supposed_rnp),
                    prediction_inaccuracy_supposed_visual_label: parseInt(supposed_visual),
                }
            })

            return res.status(201).json({
                status: 'success',
                message: `Report filed successfully`,
                report_details: fileReport
            })
        } catch(err) {
            if(err.code){
                if(err.code === 'P2003') {
                    return res.status(409).json({
                        status: 'error',
                        message: `Report not filed. No prediction log with id ${predictionLogId}`
                    })
                }
            }
            next(err)
        }
    }
}

module.exports = ReportController;