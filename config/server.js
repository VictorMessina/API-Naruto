/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* importar o módulo do express-session */
var expressSession = require('express-session');

/* iniciar o objeto do express */
var app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');

/* seta as views da aplicação no servidor */
app.set('views', './app/views');

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* configurar o middleware express-validator */
app.use(expressValidator());

/* configurar o middleware express-session */
app.use(expressSession({

    secret: 'kajdoiwdmoGFDGFHsaindsakDFnd8ouw6qhiqw2!@#3$$fdkfemf#$dka', // token de seguranca do cookie, pode ser qualquer string, quanto mais dificil mais seguro
    resave: false, // se true faz com que a sessao seja regravada no servidor mesmo que nao contenha nenhuma modificacao
    saveUninitialized: false // se true cria sempre um nova sessao quando ela for modificada
}));

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
    .include('app/routes')
    .then('config/mongoConfig.js')
    .then('config/mongoConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exportar o objeto app */
module.exports = app;