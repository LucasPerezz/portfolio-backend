const mongoose = require('mongoose');

const skillsCollection = "skills";

const skillsSchema = new mongoose.Schema({
    language: String,
    image: String
});

const skillsModel = mongoose.model(skillsCollection, skillsSchema);

module.exports = skillsModel;