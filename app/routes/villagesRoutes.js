module.exports = function (application) {

	/** -------------------------------------- Rotas de GET -------------------------------------- */

	application.get('/villages/allVillages', function (req, res) {
		application.app.controllers.villages.villagesController.allVillages(application, req, res);
	});

	application.get('/villages/findVillageByName', function (req, res) {
		application.app.controllers.villages.villagesController.findVillageByName(application, req, res);
	});

	/** -------------------------------------- Rotas de POST -------------------------------------- */

};