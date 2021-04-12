var mongoose = require('../../config/mongoConnection')
const schema = mongoose.Schema;

const villageSchema = new schema({
	name: {
		type: String,
		require: true
	},
    translatedName: {
		type: String,
		require: true
	},
    villageChief: {
		type: String,
		require: true
	},
	countryOriginalName: {
		type: String,
		require: true
	},
	countryTranslatedName: {
		type: String,
		require: true
	},
    imageURL: {
        type: String,
		require: true
    }
});

const villageModel = mongoose.model('villages', villageSchema)

function Village() {
	this.villageModel = villageModel;
}

module.exports = function () {
	return Village;
};