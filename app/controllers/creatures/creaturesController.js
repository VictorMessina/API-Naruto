const viewsController = require('../views/viewsController');
const logger = require('../../models/logger');
const loggerPhrases = require('../../../config/logger/loggerPhrases');

module.exports.allCreatures = async function (application, req, res) {

    const creature = new application.app.models.creature();

    try {

        var sort = { name: 1 };
        var allCreaturesData = await creature.creatureModel.find().sort(sort);

        if (allCreaturesData.length === 0) {

            viewsController.allCreaturesView(application, req, res, undefined);
            return;
        }

        viewsController.allCreaturesView(application, req, res, allCreaturesData);
        return;


    }
    catch (error) {

        logger.makeLog(loggerPhrases.CREATURES_CONTROLLER_ALL_CREATURES_ERROR + error);

    };
};

module.exports.findCreatureByName = async function (application, req, res) {

    const creature = new application.app.models.creature();

    try {

        // regex para nome do personagem com case sensitive{ $regex: '.*' + req.params.name + '.*' } }, 
        // regex usado é sem case sensitive
        var specificCreatureData = await creature.creatureModel.find({ name: { $regex: new RegExp(req.query.creatureName, "i") } });

        if (specificCreatureData.length === 0) {

            viewsController.specificCreatureView(application, req, res, undefined);
            return;
        }

        viewsController.specificCreatureView(application, req, res, specificCreatureData);
        return;

    }
    catch (error) {

        logger.makeLog(loggerPhrases.CREATURES_CONTROLLER_FIND_CREATURES_BY_NAME_ERROR + error);

    };
};