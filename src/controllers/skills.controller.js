const skillsModel = require('../models/skills.model');

const GET_allSkills = async (_req, res) => {
    try {
        const result = await skillsModel.find();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const POST_skill = async (req, res) => {
    try {
        const skill = req.body;
        await skillsModel.create(skill);
        res.json({msg: "Skill agregada"});
    } catch (error) {
        console.log(error);
    }
}

const DELETE_skill = async (req, res) => {
    try {
        const id = req.params.id;
        await skillsModel.findByIdAndDelete(id);
        res.json({msg: "Skill eliminada"});
    } catch (error) {
        console.log(error);
    }
}

const GET_skillById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = skillsModel.findById(id);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const PUT_skill = async (req, res) => {
    try {
        const id = req.params.id;
        const skill = req.body;
        await skillsModel.updateOne(id, skill);
        res.json({msg: "Skill actualizada"});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    GET_allSkills,
    POST_skill,
    DELETE_skill,
    GET_skillById,
    PUT_skill
}