var mongoose = require('../../config/mongoConnection')
const schema = mongoose.Schema;

const characterSchema = new schema({
	name: {
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
	villageOriginalName: {
		type: String,
		require: true
	},
	villageTranslatedName: {
		type: String,
		require: true
	},
	ninjaRegisterNumber: {
		type: String,
		require: true
	},
	birthdate: {
		type: String,
		require: true
	},
	bloodType: {
		type: String,
		require: true
	},
	gender: {
		type: String,
		require: true
	},
	sign: {
		type: String,
		require: true
	},
	databook: [
		{
			book: {
				type: String,
				require: true
			},
			dead: {
				type: String,
				require: true
			},
			age: {
				type: String,
				require: true
			},
			height: {
				type: String,
				require: true
			},
			weight: {
				type: String,
				require: true
			},
			rank: {
				type: String,
				require: true
			},
			ninjutsu: {
				type: String,
				require: true
			},
			taijutsu: {
				type: String,
				require: true
			},
			genjutsu: {
				type: String,
				require: true
			},
			intelligence: {
				type: String,
				require: true
			},
			strength: {
				type: String,
				require: true
			},
			agilit: {
				type: String,
				require: true
			},
			resistance: {
				type: String,
				require: true
			},
			seal: {
				type: String,
				require: true
			},
			total: {
				type: Number,
				require: true
			},
			potential: {
				type: Number,
				require: true
			},
			missionRankS: {
				type: String,
				require: true
			},
			missionRankA: {
				type: String,
				require: true
			},
			missionRankB: {
				type: String,
				require: true
			},
			missionRankC: {
				type: String,
				require: true
			},
			missionRankD: {
				type: String,
				require: true
			},
			totalMission: {
				type: String,
				require: true
			}
		}
	]
});

const characterModel = mongoose.model('characters', characterSchema)

function Character() {
	this.characterModel = characterModel;
}

module.exports = function () {
	return Character;
};