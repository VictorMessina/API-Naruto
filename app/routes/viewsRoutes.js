module.exports = function(application) {

    /** -------------------------------------- Rotas de GET -------------------------------------- */

	application.get('/', function(req, res) {
		application.app.controllers.views.viewsController.indexView(application, req, res);
    });
    
    application.get('/welcomeView', function(req, res) {
		application.app.controllers.views.viewsController.welcomeView(application, req, res);
	});

	application.get('/aboutView', function(req, res) {
		application.app.controllers.views.viewsController.aboutView(application, req, res);
	});

	application.get('/apiView', function(req, res) {
		application.app.controllers.views.viewsController.apiView(application, req, res);
	});

	application.get('/allCharactersView', function(req, res) {
		application.app.controllers.views.viewsController.allCharactersView(application, req, res);
	});

	/** -------------------------------------- Rotas de POST -------------------------------------- */

};