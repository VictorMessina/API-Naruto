const env = process.env.NODE_ENV || 'DEV';
const appName = process.env.APP_NAME || 'Naruto_API'
const loggerPath = process.env.LOGGER_PATH || 'config/logger/'

var loggerConfig;

switch (env) {
    case 'DEV':

        loggerConfig = {
            'loggerEnv': env,
            'appName': appName + '_' + env,
            'loggerPathFile': loggerPath
        };

        break;

    case 'PROD':

        loggerConfig = {
            'loggerEnv': env,
            'appName': appName + '_' + env,
            'loggerPathFile': loggerPath
        };

        break;

}

module.exports = loggerConfig;