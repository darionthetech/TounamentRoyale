const { integer } = require('check-types');
const { schema } = require('mongoose');

const bookingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    bookingId: {
        type: String,
        required: true,

    },
    date: {
        type: String,
        required: true,
    },
});

module.exports = bookingSchema;