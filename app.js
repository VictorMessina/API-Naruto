/* importar as configurações do servidor */
var app = require('./config/server');

const PORT = process.env.SERVER_PORT || 3000

/* parametrizar a porta de escuta */
app.listen(PORT, function(){
	console.log('Server online in port - ' + PORT);
});