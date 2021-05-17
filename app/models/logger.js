const loggerConfig = require('../../config/logger/loggerConfig');
const fs = require('fs');

function loggerConfiguration() {

    var config;

    config = loggerConfig

    return config;
}

class logger {
    constructor() {

        this._config = loggerConfiguration();

    }
    static getInstance() {
        if (!logger.instance) {
            logger.instance = new logger();
        }
        return logger.instance;
    }

    makeLog(message) {

        var loggerMessage = `environment: ${this._config.loggerEnv}, applicationName: ${this._config.appName}, message: ${message}, date: ${new Date()} `

        if (this._config.loggerEnv === 'DEV') {

            fs.appendFileSync(this._config.loggerPathFile + `LoggerFile_${this._config.loggerEnv}.txt`, loggerMessage + "\n", 'utf-8', function (error) {
                if (error) {
                    console.log(error);
                }
            });
        }
        else {

            fs.appendFileSync(this._config.loggerPathFile + `LoggerFile_${this._config.loggerEnv}.txt`, loggerMessage + "\n", 'utf-8', function (error) {
                if (error) {
                    console.log(error);
                }
            });

        }

    }
}

module.exports = new logger;