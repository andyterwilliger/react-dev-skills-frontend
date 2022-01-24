const mongoose = require ('mongoose');

const skillSchema = new mongoose.Schema({
    skill: String,
    level: String
})

const Skill = mongoose.model('Skill', skillSchema)

module.exports = Skill;