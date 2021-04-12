const viewsController = require('../views/viewsController');

module.exports.allVillages = async function (application, req, res) {

    const villages = new application.app.models.village();

    try {

        var sort = { name: 1 };
        var allVillagesData = await villages.villageModel.find().sort(sort);

        if (allVillagesData.length === 0) {

            viewsController.allVillagesView(application, req, res, undefined);
            return;
        }

        viewsController.allVillagesView(application, req, res, allVillagesData);
        return;


    }
    catch (err) {
        console.log(err)
    };
};

module.exports.findVillageByName = async function (application, req, res) {

    const villages = new application.app.models.village();

    try {

        // regex para nome do personagem com case sensitive{ $regex: '.*' + req.params.name + '.*' } }, 
        // regex usado é sem case sensitive
        var specificVillageData = await villages.villageModel.find({ name: { $regex: new RegExp(req.query.villageName, "i") } });

        if (specificVillageData.length === 0) {

            viewsController.specificVillage(application, req, res, undefined);
            return;
        }

        viewsController.specificVillage(application, req, res, specificVillageData);
        return;

    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ error: 'Is not possible retrive the selected village, please try again later' });
    };
};