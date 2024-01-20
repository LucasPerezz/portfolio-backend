const projectModel = require('../models/projects.model');
const skillsModel = require('../models/skills.model');


const getProjects = async (req, res) => {
    try {
        const result = await projectModel.find().populate('utilities').lean();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const insertProject = async (req, res) => {
    try {
        const project = req.body;
        await projectModel.create(project);
        res.json({msg: "Proyecto agregado", project: project});
    } catch (error) {
        console.log(error);
    };
}

const getProjectById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await projectModel.find({_id: id}).populate('utilities').lean();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const deleteProject = async (req, res) => {
    try {
        const id = req.params.id;
        await projectModel.findByIdAndDelete(id);
        res.json({msg: "Proyecto eliminado"});
    } catch (error) {
        console.log(error);
    }
}

const updateProject = async (req, res) => {
    try {
        const id = req.params.id;
        const project = req.body;
        await projectModel.updateOne({_id: id}, project);
        res.json({msg: "Proyecto actualizado"});
    } catch (error) {
        console.log(error);
    }
}

const insertSkillInProject = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const skillId = req.params.skillId;
        const project = await projectModel.findById(projectId);
        project.utilities.push(skillId);
        await projectModel.updateOne({_id: projectId}, project);
        res.json({msg: "Skill agregada", project: project});
    } catch (error) {
        console.log(error);
    }
}

const deleteSkillInProject = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const skillId = req.params.skillId;
        const project = await projectModel.findById(projectId);
        project.utilities = project.utilities.filter(skill => skill != skillId);
        await projectModel.updateOne({_id: projectId}, project);
        res.json({msg: "Skill eliminada", project: project});
    } catch (error) {
        console.log(error);
    }
}


module.exports =  {
    getProjects,
    insertProject,
    getProjectById,
    updateProject,
    deleteProject,
    insertSkillInProject,
    deleteSkillInProject
}