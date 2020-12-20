const config = require('./mongoConfig');
const mongoose = require('mongoose');

const dbUrl = config.dbURL;
const optionsDB = { useUnifiedTopology: true, poolSize: 5, useNewUrlParser: true}

mongoose.connect(dbUrl, optionsDB);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('connected', () => {
    console.log('Successfully connected in narutoDB');
});

mongoose.connection.on('error',(err) => {
    console.log('Error in Establish connection with narutoDB ' + err);
});

mongoose.connection.on('disconnect', () => {
    console.log('Successfully disconnected from narutoDB');
});

module.exports = mongoose;