const skillsModel = require('../models/skills.model');

const getSkills = async (_req, res) => {
    try {
        const result = await skillsModel.find();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const insertSkill = async (req, res) => {
    try {
        const skill = req.body;
        await skillsModel.create(skill);
        res.json({msg: "Skill agregada"});
    } catch (error) {
        console.log(error);
    }
}

const deleteSkill = async (req, res) => {
    try {
        const id = req.params.id;
        await skillsModel.findByIdAndDelete(id);
        res.json({msg: "Skill eliminada"});
    } catch (error) {
        console.log(error);
    }
}

const getSkillById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = skillsModel.findById(id);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const updateSkill = async (req, res) => {
    try {
        const id = req.params.id;
        const skill = req.body;
        await skillsModel.updateOne({_id: id}, skill);
        res.json({msg: "Skill actualizada"});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getSkills,
    insertSkill,
    deleteSkill,
    getSkillById,
    updateSkill
}