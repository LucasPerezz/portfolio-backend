import mongoose from "mongoose";

const skillsCollection = "skills";

const skillsSchema = new mongoose.Schema({
    language: String,
    image: String
});

const skillsModel = mongoose.model(skillsCollection, skillsSchema);

export default skillsModel;