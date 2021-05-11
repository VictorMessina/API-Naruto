module.exports.indexView = function (application, req, res) {
    res.render('index');
};

module.exports.welcomeView = function (application, req, res) {
    res.render('welcome');
};

module.exports.aboutView = function (application, req, res) {
    res.render('about');
};

module.exports.apiView = function (application, req, res) {
    res.render('api');
};

module.exports.allCharactersView = function (application, req, res, charactersData) {

    if (charactersData === undefined) {
        res.render('allCharacters', { errorsView: [{ msg: 'Não existe nenhum personagem no banco de dados' }], allCharactersData: [] });
        return;
    }

    res.render('allCharacters', { errorsView: {}, allCharactersData: charactersData });
    return;
};

module.exports.specificCharacter = function (application, req, res, specificCharacterData) {

    if (specificCharacterData === undefined) {
        res.render('specificCharacter', { errorsView: [{ msg: 'Não foi encontrado nenhum personagem com este nome, favor tentar novamente.' }], characterData: [] });
        return;
    }

    res.render('specificCharacter', { errorsView: {}, characterData: specificCharacterData });
    return;
};

module.exports.allVillagesView = function (application, req, res, villagesData) {

    if (villagesData === undefined) {
        res.render('allVillages', { errorsView: [{ msg: 'Não existe nenhuma vila no banco de dados' }], allVillagesData: [] });
        return;
    }

    res.render('allVillages', { errorsView: {}, allVillagesData: villagesData });
    return;
};

module.exports.specificVillage = function (application, req, res, specificVillageData) {

    if (specificVillageData === undefined) {
        res.render('specificVillage', { errorsView: [{ msg: 'Não foi encontrado nenhuma vila com este nome, favor tentar novamente.' }], villageData: [] });
        return;
    }

    res.render('specificVillage', { errorsView: {}, villageData: specificVillageData });
    return;
};

module.exports.allCreaturesView = function (application, req, res, creaturesData) {

    if (creaturesData === undefined) {
        res.render('allCreatures', { errorsView: [{ msg: 'Não existe nenhuma criatura no banco de dados' }], allCreaturesData: [] });
        return;
    }

    res.render('allCreatures', { errorsView: {}, allCreaturesData: creaturesData });
    return;
};

module.exports.specificCreatureView = function (application, req, res, specificCreatureData) {

    if (specificCreatureData === undefined) {
        res.render('specificCreature', { errorsView: [{ msg: 'Não foi encontrado nenhuma criatura com este nome, favor tentar novamente.' }], creatureData: [] });
        return;
    }

    res.render('specificCreature', { errorsView: {}, creatureData: specificCreatureData });
    return;
};