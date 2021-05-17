var mongoose = require('../../config/mongo/mongoConnection')
const schema = mongoose.Schema;

const creatureSchema = new schema({
	name: {
		type: String,
		require: true
	},
    villageOriginalName: {
		type: String,
		require: true
	},
	villageTranslatedName: {
		type: String,
		require: true
	},
    biju: {
        type: String,
        require: true
    },
    nickname: {
        type: String,
        require: true
    },
    imageURL: {
        type: String,
		require: true
    }
});

const creatureModel = mongoose.model('creatures', creatureSchema)

function Creature() {
	this.creatureModel = creatureModel;
}

module.exports = function () {
	return Creature;
};