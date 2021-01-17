module.exports.addNewCharacter = async function (application, req, res) {

    var body = req.body;

    const character = new application.app.models.character();

    try {

        character.characterModel.create(body, function (error) {
            if (error) {
                return res.status(500).send({ error: 'registration failded' });
            };
        });

        return res.send({ message: "New character registered successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'registration failded' })
    };
};

module.exports.allCharacters = async function (application, req, res) {

    const characters = new application.app.models.character();

    try {

        var sort = { name: 1 };
        var allCharacters = await characters.characterModel.find().sort(sort);

        return res.send({result: allCharacters, totalCharacters: allCharacters.length});
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ error: 'Is not possible retrive all characters, please try again later' });
    };
};

module.exports.findCharacterByName = async function (application, req, res) {

    const characters = new application.app.models.character();

    try {

        // regex para nome do personagem com case sensitive{ $regex: '.*' + req.params.name + '.*' } }, 
        // regex usado é sem case sensitive
        console.log(req.query)
        var character = await characters.characterModel.find({ name: { $regex: new RegExp(req.query.characterName, "i") } });

        if (character.length == 0) {

            return res.status(404).send({ message: 'Character not found with the specific name, try another one' });

        }

        return res.send(character);

    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ error: 'Is not possible retrive the selected character, please try again later' });
    };
};