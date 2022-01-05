const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    skill: String,
    level: String
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);

