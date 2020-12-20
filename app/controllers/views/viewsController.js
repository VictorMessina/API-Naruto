module.exports.indexView = function (application, req, res) {
    res.render('index');
};

module.exports.welcomeView = function (application, req, res) {
    res.render('welcome');
};

module.exports.aboutView = function (application, req, res) {
    res.render('about');
};

module.exports.apiView = function (application, req, res) {
    res.render('api');
};