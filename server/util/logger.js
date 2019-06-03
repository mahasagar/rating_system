'use strict'
const winston = require('winston');
const consoleLog = new winston.transports.Console()

module.exports = {
    requestLogger: createRequestLogger([consoleLog])
}

function createRequestLogger(transports) {
    const requestLogger = winston.createLogger({
        format: getRequestLogFormatter(),
        transports: transports
    })

    return function logRequest(req, res, next) {
        requestLogger.info({req, res})
        next()
    }
}

function createErrorLogger(transports) {
    const errLogger = winston.createLogger({
        level: 'error',
        transports: transports
    })

    return function logError(err, req, res, next) {
        errLogger.error({err, req, res})
        next()
    }
}

function getRequestLogFormatter() {
    const {combine, timestamp, printf} = winston.format;
    return combine(
        timestamp(),
        printf(info => {
            const {req, res} = info.message;
            return `${info.timestamp} ${info.level}: ${req.originalUrl}`;
        })
    );
}