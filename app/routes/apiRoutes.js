module.exports = function (application) {

	/** -------------------------------------- Rotas de GET -------------------------------------- */

	application.get('/api/characters/allCharacters', function (req, res) {
		application.app.controllers.api.apiController.allCharacters(application, req, res);
	});

	application.get('/api/characters/findCharacterByName', function (req, res) {
		application.app.controllers.api.apiController.findCharacterByName(application, req, res);
	});

	application.get('/api/villages/allVillages', function (req, res) {
		application.app.controllers.api.apiController.allVillages(application, req, res);
	});

	application.get('/api/villages/findVillageByName', function (req, res) {
		application.app.controllers.api.apiController.findVillageByName(application, req, res);
	});

	application.get('/api/creatures/allCreatures', function (req, res) {
		application.app.controllers.api.apiController.allCreatures(application, req, res);
	});

	application.get('/api/creatures/findCreatureByName', function (req, res) {
		application.app.controllers.api.apiController.findCreatureByName(application, req, res);
	});

	/** -------------------------------------- Rotas de POST -------------------------------------- */

	application.post('/api/characters/addCharactersFromXLSX', function (req, res) {
		application.app.controllers.api.apiController.addCharactersFromXLSX(application, req, res);
	});

	application.post('/api/villages/addVillagesFromXLSX', function (req, res) {
		application.app.controllers.api.apiController.addVillagesFromXLSX(application, req, res);
	});

	application.post('/api/creatures/addCreaturesFromXLSX', function (req, res) {
		application.app.controllers.api.apiController.addCreaturesFromXLSX(application, req, res);
	});
};