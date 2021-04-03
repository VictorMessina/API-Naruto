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