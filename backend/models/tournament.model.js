const mongoose = require('mongoose');

const Schema = mongoose.Schema;
/* update schema with info from front end */
const tournamentSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;