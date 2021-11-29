const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tournamentSchema = new Schema ({
    action: {
        type: String,
        required: [true, 'tournament text required'],
    }
});

const Todo = mongoose.model('tournament', tournamentSchema);

module.exports = tournamentSchema;
