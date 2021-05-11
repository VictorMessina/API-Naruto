module.exports = function (application) {

	/** -------------------------------------- Rotas de GET -------------------------------------- */

	application.get('/creatures/allCreatures', function (req, res) {
		application.app.controllers.creatures.creaturesController.allCreatures(application, req, res);
	});

	application.get('/creatures/findCreatureByName', function (req, res) {
		application.app.controllers.creatures.creaturesController.findCreatureByName(application, req, res);
	});

	/** -------------------------------------- Rotas de POST -------------------------------------- */

};