const xlsx = require('xlsx');
const logger = require('../../models/logger')
const loggerPhrases = require('../../../config/logger/loggerPhrases')

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
        logger.makeLog(loggerPhrases.API_CONTROLLER_ADD_NEW_CHARACTER_ERROR + error);
        return res.status(500).send({ error: 'registration failded' });
    };
};

module.exports.convertCharactersDataFromXLSX = async function (application, req, res) {

    var workBook = xlsx.readFile('naruto_databooks.xlsx', { cellDates: true });

    var workSheet = workBook.Sheets['Personagens'];

    var charactersDataFromXLSX = xlsx.utils.sheet_to_json(workSheet);

    return charactersDataFromXLSX;

};

module.exports.addCharactersFromXLSX = async function (application, req, res) {

    var charactersDataJSON = await this.convertCharactersDataFromXLSX(application, req, res);

    const character = new application.app.models.character();

    try {

        charactersDataJSON.forEach(element => {

            var newCharacter = {
                name: String(element.name),
                countryOriginalName: String(element.countryOriginalName),
                countryTranslatedName: String(element.countryTranslatedName),
                villageOriginalName: String(element.villageOriginalName),
                villageTranslatedName: String(element.villageTranslatedName),
                imageURL: String(element.imageURL),
                ninjaRegisterNumber: String(element.ninjaRegisterNumber),
                birthdate: String(element.birthdate),
                bloodType: String(element.bloodType),
                gender: String(element.gender),
                sign: String(element.sign),
                databook: [

                    {
                        book: String(element.databook_0_book),
                        dead: String(element.databook_0_dead),
                        age: String(element.databook_0_age),
                        height: String(element.databook_0_height),
                        weight: String(element.databook_0_weight),
                        rank: String(element.databook_0_rank),
                        ninjutsu: String(element.databook_0_ninjutsu),
                        taijutsu: String(element.databook_0_taijutsu),
                        genjutsu: String(element.databook_0_genjutsu),
                        intelligence: String(element.databook_0_intelligence),
                        strength: String(element.databook_0_strength),
                        agilit: String(element.databook_0_agility),
                        resistance: String(element.databook_0_resistance),
                        seal: String(element.databook_0_seal),
                        total: Number(element.databook_0_total),
                        potential: Number(element.databook_0_percentagePotential),
                        missionRankS: String(element.databook_0_missionRankS),
                        missionRankA: String(element.databook_0_missionRankA),
                        missionRankB: String(element.databook_0_missionRankB),
                        missionRankC: String(element.databook_0_missionRankC),
                        missionRankD: String(element.databook_0_missionRankD),
                        totalMission: String(element.databook_0_totalMission)
                    },
                    {
                        book: String(element.databook_1_book),
                        dead: String(element.databook_1_dead),
                        age: String(element.databook_1_age),
                        height: String(element.databook_1_height),
                        weight: String(element.databook_1_weight),
                        rank: String(element.databook_1_rank),
                        ninjutsu: String(element.databook_1_ninjutsu),
                        taijutsu: String(element.databook_1_taijutsu),
                        genjutsu: String(element.databook_1_genjutsu),
                        intelligence: String(element.databook_1_intelligence),
                        strength: String(element.databook_1_strength),
                        agilit: String(element.databook_1_agility),
                        resistance: String(element.databook_1_resistance),
                        seal: String(element.databook_1_seal),
                        total: Number(element.databook_1_total),
                        potential: Number(element.databook_1_percentagePotential),
                        missionRankS: String(element.databook_1_missionRankS),
                        missionRankA: String(element.databook_1_missionRankA),
                        missionRankB: String(element.databook_1_missionRankB),
                        missionRankC: String(element.databook_1_missionRankC),
                        missionRankD: String(element.databook_1_missionRankD),
                        totalMission: String(element.databook_1_totalMission)
                    },
                    {
                        book: String(element.databook_2_book),
                        dead: String(element.databook_2_dead),
                        age: String(element.databook_2_age),
                        height: String(element.databook_2_height),
                        weight: String(element.databook_2_weight),
                        rank: String(element.databook_2_rank),
                        ninjutsu: String(element.databook_2_ninjutsu),
                        taijutsu: String(element.databook_2_taijutsu),
                        genjutsu: String(element.databook_2_genjutsu),
                        intelligence: String(element.databook_2_intelligence),
                        strength: String(element.databook_2_strength),
                        agilit: String(element.databook_2_agility),
                        resistance: String(element.databook_2_resistance),
                        seal: String(element.databook_2_seal),
                        total: Number(element.databook_2_total),
                        potential: Number(element.databook_2_percentagePotential),
                        missionRankS: String(element.databook_2_missionRankS),
                        missionRankA: String(element.databook_2_missionRankA),
                        missionRankB: String(element.databook_2_missionRankB),
                        missionRankC: String(element.databook_2_missionRankC),
                        missionRankD: String(element.databook_2_missionRankD),
                        totalMission: String(element.databook_2_totalMission)
                    }
                ]
            }

            character.characterModel.create(newCharacter, err => {
                if (err) {
                    return res.status(500).send({ error: 'registration failded ' + err });
                };
            });
        });

        return res.send({ message: "New characters registered successfully" });

    }
    catch (error) {
        logger.makeLog(loggerPhrases.API_CONTROLLER_ADD_CHARACTER_FROM_XLXS_ERROR + error);
        return res.status(500).send({ error: 'registration failded' });
    };
};

module.exports.allCharacters = async function (application, req, res) {

    const character = new application.app.models.character();

    try {

        var sort = { name: 1 };
        var allCharacters = await character.characterModel.find().sort(sort);

        return res.send({ result: allCharacters, totalCharacters: allCharacters.length });
    }
    catch (error) {
        logger.makeLog(loggerPhrases.API_CONTROLLER_ALL_CHARACTERS_ERROR + error);
        return res.status(500).send({ error: 'Is not possible retrive all characters, please try again later' });
    };
};

module.exports.findCharacterByName = async function (application, req, res) {

    const character = new application.app.models.character();

    try {

        // regex para nome do personagem com case sensitive{ $regex: '.*' + req.params.name + '.*' } }, 
        // regex usado é sem case sensitive
        var queryCharacter = await character.characterModel.find({ name: { $regex: new RegExp(req.query.characterName, "i") } });

        if (queryCharacter.length == 0) {

            return res.status(404).send({ message: 'Character not found with the specific name, try another one' });

        }

        return res.send(queryCharacter);

    }
    catch (error) {
        logger.makeLog(loggerPhrases.API_CONTROLLER_FIND_CHARACTER_BY_NAME_ERROR + error);
        return res.status(500).send({ error: 'Is not possible retrive the selected character, please try again later' });
    };
};

module.exports.convertVillagesDataFromXLSX = async function (application, req, res) {

    var workBook = xlsx.readFile('naruto_databooks.xlsx', { cellDates: true });

    var workSheet = workBook.Sheets['Vilas'];

    var villagesDataXLSX = xlsx.utils.sheet_to_json(workSheet);

    return villagesDataXLSX;

};

module.exports.addVillagesFromXLSX = async function (application, req, res) {

    var villagesDataJSON = await this.convertVillagesDataFromXLSX(application, req, res);

    const village = new application.app.models.village();

    try {

        villagesDataJSON.forEach(element => {

            var newVillage = {
                name: String(element.name),
                translatedName: String(element.translatedName),
                villageChief: String(element.villageChief),
                countryOriginalName: String(element.countryOriginalName),
                countryTranslatedName: String(element.countryTranslatedName),
                imageURL: String(element.imageURL)
            }

            village.villageModel.create(newVillage, err => {
                if (err) {
                    return res.status(500).send({ error: 'registration failded ' + err });
                };
            });
        });

        return res.send({ message: "New villages registered successfully" });

    }
    catch (error) {
        logger.makeLog(loggerPhrases.API_CONTROLLER_ADD_VILLAGES_FROM_XLSX_ERROR + error);
        return res.status(500).send({ error: 'registration failded' });
    };
};

module.exports.allVillages = async function (application, req, res) {

    const village = new application.app.models.village();

    try {

        var sort = { name: 1 };
        var allVillages = await village.villageModel.find().sort(sort);

        return res.send({ result: allVillages, totalVillages: allVillages.length });
    }
    catch (error) {
        logger.makeLog(loggerPhrases.API_CONTROLLER_ALL_VILLAGES_ERROR + error);
        return res.status(500).send({ error: 'Is not possible retrive all villages, please try again later' });
    };
};

module.exports.findVillageByName = async function (application, req, res) {

    const village = new application.app.models.village();

    try {

        // regex para nome do personagem com case sensitive{ $regex: '.*' + req.params.name + '.*' } }, 
        // regex usado é sem case sensitive
        var queryVillage = await village.villageModel.find({ name: { $regex: new RegExp(req.query.villageName, "i") } });

        if (queryVillage.length == 0) {

            return res.status(404).send({ message: 'Village not found with the specific name, try another one' });

        }

        return res.send(queryVillage);

    }
    catch (error) {
        logger.makeLog(loggerPhrases.API_CONTROLLER_FIND_VALLAGE_BY_NAME_ERROR + error);
        return res.status(500).send({ error: 'Is not possible retrive the selected village, please try again later' });
    };
};

module.exports.convertCreaturesDataFromXLSX = async function (application, req, res) {

    var workBook = xlsx.readFile('naruto_databooks.xlsx', { cellDates: true });

    var workSheet = workBook.Sheets['Criaturas'];

    var creaturesDataXLSX = xlsx.utils.sheet_to_json(workSheet);

    return creaturesDataXLSX;

};

module.exports.addCreaturesFromXLSX = async function (application, req, res) {

    var creaturesDataJSON = await this.convertCreaturesDataFromXLSX(application, req, res);

    const creature = new application.app.models.creature();

    try {

        creaturesDataJSON.forEach(element => {

            var newCreature = {
                name: String(element.name),
                villageOriginalName: String(element.villageOriginalName),
                villageTranslatedName: String(element.villageTranslatedName),
                biju: String(element.biju),
                nickname: String(element.nickname),
                imageURL: String(element.imageURL)
            }

            creature.creatureModel.create(newCreature, err => {
                if (err) {
                    return res.status(500).send({ error: 'registration failded ' + err });
                };
            });
        });

        return res.send({ message: "New creatures registered successfully" });

    }
    catch (error) {
        logger.makeLog(loggerPhrases.API_CONTROLLER_ADD_CREATURES_FROM_XLSX_ERROR + error);
        return res.status(500).send({ error: 'registration failded' });
    };
};

module.exports.allCreatures = async function (application, req, res) {

    const creature = new application.app.models.creature();

    try {

        var sort = { name: 1 };
        var allCreatures = await creature.creatureModel.find().sort(sort);

        return res.send({ result: allCreatures, totalCreatures: allCreatures.length });
    }
    catch (error) {
        logger.makeLog(loggerPhrases.API_CONTROLLER_ALL_CREATURES_ERROR + error);
        return res.status(500).send({ error: 'Is not possible retrive all creatures, please try again later' });
    };
};

module.exports.findCreatureByName = async function (application, req, res) {

    const creature = new application.app.models.creature();

    try {

        // regex para nome do personagem com case sensitive{ $regex: '.*' + req.params.name + '.*' } }, 
        // regex usado é sem case sensitive
        var queryCreature = await creature.creatureModel.find({ name: { $regex: new RegExp(req.query.creatureName, "i") } });

        if (queryCreature.length == 0) {

            return res.status(404).send({ message: 'Creature not found with the specific name, try another one' });

        }

        return res.send(queryCreature);

    }
    catch (error) {
        logger.makeLog(loggerPhrases.API_CONTROLLER_FIND_CREATURES_BY_NAME_ERROR + error);
        return res.status(500).send({ error: 'Is not possible retrive the selected creature, please try again later' });
    };
};