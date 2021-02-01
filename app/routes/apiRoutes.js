module.exports = function(application) {

    /** -------------------------------------- Rotas de GET -------------------------------------- */

	application.get('/api/characters/allCharacters', function(req, res) {
		application.app.controllers.api.apiController.allCharacters(application, req, res);
    });

    application.get('/api/characters/findCharacterByName', function(req, res) {
		application.app.controllers.api.apiController.findCharacterByName(application, req, res);
	});

	/** -------------------------------------- Rotas de POST -------------------------------------- */

};