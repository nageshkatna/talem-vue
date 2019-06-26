const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create Schema
const injuriesSchema = new Schema({
    id: {
        type: Number
    },
    injury: {
        type: String
    },
    value:{
        type: Boolean
    }
});

module.exports = injuries = mongoose.model('injuries', injuriesSchema);
