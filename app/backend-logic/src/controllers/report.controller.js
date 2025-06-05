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
            prediction_log_id,
            supposed_ils,
            supposed_rnav,
            supposed_rnp,
            supposed_visual,
            additional_comments,
        } = req.body

        try {
            const fileReport = await prisma.prediction_inaccuracies.create({
                data: {
                    prediction_log_id: prediction_log_id,
                    prediction_inaccuracy_supposed_ils_label: parseInt(supposed_ils),
                    prediction_inaccuracy_supposed_rnav_label: parseInt(supposed_rnav),
                    prediction_inaccuracy_supposed_rnp_label: parseInt(supposed_rnp),
                    prediction_inaccuracy_supposed_visual_label: parseInt(supposed_visual),
                    prediction_inaccuracy_additional_comments: additional_comments
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
                        message: `Report not filed. No prediction log with ID ${prediction_log_id}`
                    })
                } else if(err.code === 'P2002') {
                    return res.status(409).json({
                        status: 'error',
                        message: `Report already filed for Prediction ID ${prediction_log_id}`
                    })
                }
            }
            next(err)
        }
    }
}

module.exports = ReportController;