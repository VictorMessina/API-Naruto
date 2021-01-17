module.exports = function(application) {

    /** -------------------------------------- Rotas de GET -------------------------------------- */

	application.get('/characters/allCharacters', function(req, res) {
		application.app.controllers.characters.charactersController.allCharacters(application, req, res);
    });

    application.get('/characters/findCharacterByName', function(req, res) {
		application.app.controllers.characters.charactersController.findCharacterByName(application, req, res);
	});

	/** -------------------------------------- Rotas de POST -------------------------------------- */

};