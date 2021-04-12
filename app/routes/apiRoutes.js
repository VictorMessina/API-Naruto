module.exports = function (application) {

	/** -------------------------------------- Rotas de GET -------------------------------------- */

	application.get('/api/characters/allCharacters', function (req, res) {
		application.app.controllers.api.apiController.allCharacters(application, req, res);
	});

	application.get('/api/characters/findCharacterByName', function (req, res) {
		application.app.controllers.api.apiController.findCharacterByName(application, req, res);
	});

	application.get('/api/village/allVillages', function (req, res) {
		application.app.controllers.api.apiController.allVillages(application, req, res);
	});

	application.get('/api/village/findVillageByName', function (req, res) {
		application.app.controllers.api.apiController.findVillageByName(application, req, res);
	});

	/** -------------------------------------- Rotas de POST -------------------------------------- */

	application.post('/api/characters/addCharactersFromXLSX', function (req, res) {
		application.app.controllers.api.apiController.addCharactersFromXLSX(application, req, res);
	});

	application.post('/api/village/addVillagesFromXLSX', function (req, res) {
		application.app.controllers.api.apiController.addVillagesFromXLSX(application, req, res);
	});
};