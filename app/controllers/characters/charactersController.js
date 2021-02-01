const viewsController = require('../views/viewsController');

module.exports.allCharacters = async function (application, req, res) {

    const characters = new application.app.models.character();

    try {

        var sort = { name: 1 };
        var allCharactersData = await characters.characterModel.find().sort(sort);

        viewsController.allCharactersView(application, req, res, allCharactersData);

    }
    catch (err) {
        console.log(err)
    };
};