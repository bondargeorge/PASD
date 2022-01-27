const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    floorWorkerId: {
        type: Number
    },
    email: {
        type: String
    },
    date: {
        type: String
    },
    scenario: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Notification', notificationSchema);