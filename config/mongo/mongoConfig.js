// caso o programador nao criar/setar a variavel de ambiente NODE_ENV o node vai assumir que o ambiente é de desenvolvimento
// para setar a variavel de ambiente usar o seguinte comando no terminal: set NODE_ENV=ambiente_que_deseja_usar
const env = process.env.NODE_ENV || 'DEV'

const config = () => {

    switch (env) {
        case 'DEV':

            return {

                'dbURL': 'mongodb://127.0.0.1:27017/narutoDB', // necesario ser diferente do ambiente de prod e hml
                'JWTSecretKey': 'yourSecret', // necesario ser diferente do ambiente de prod e hml
                'JWTExpires': '7d' // necesario ser diferente do ambiente de prod e hml
            }

        case 'HML':

            return {

                'dbURL': 'mongodb://127.0.0.1:27017/narutoDB', // necesario ser diferente do ambiente de dev e prod
                'JWTsecretKey': 'yourSecret', // necesario ser diferente do ambiente de dev e prod
                'JWTExpires': '7d' // necesario ser diferente do ambiente de dev e prod
            }

        case 'PROD':

            return {

                'dbURL': 'mongodb://127.0.0.1:27017/narutoDB', // necesario ser diferente do ambiente de dev e hml
                'JWTsecretKey': 'yourSecret', // necesario ser diferente do ambiente de dev e hml
                'JWTExpires': '7d' // necesario ser diferente do ambiente de dev e hml
            }
    }

}

console.log(`Iniciando a API no ambiente de ${env.toUpperCase()}`);

module.exports = config();