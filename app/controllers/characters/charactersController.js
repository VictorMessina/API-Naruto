const viewsController = require('../views/viewsController');

module.exports.allCharacters = async function (application, req, res) {

    const characters = new application.app.models.character();

    try {

        var sort = { name: 1 };
        var allCharactersData = await characters.characterModel.find().sort(sort);

        if (allCharactersData.length === 0) {

            viewsController.allCharactersView(application, req, res, undefined);
            return;
        }

        viewsController.allCharactersView(application, req, res, allCharactersData);
        return;


    }
    catch (err) {
        console.log(err)
    };
};

module.exports.findCharacterByName = async function (application, req, res) {

    const characters = new application.app.models.character();

    try {

        // regex para nome do personagem com case sensitive{ $regex: '.*' + req.params.name + '.*' } }, 
        // regex usado é sem case sensitive
        var specificCharacterData = await characters.characterModel.find({ name: { $regex: new RegExp(req.query.characterName, "i") } });

        if (specificCharacterData.length === 0) {

            viewsController.specificCharacter(application, req, res, undefined);
            return;
        }

        viewsController.specificCharacter(application, req, res, specificCharacterData);
        return;

    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ error: 'Is not possible retrive the selected character, please try again later' });
    };
};