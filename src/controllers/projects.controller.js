const projectModel = require('../models/projects.model');


const GET_allProjects = async (req, res) => {
    try {
        const result = await projectModel.find().populate('utilities').lean();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const POST_project = async (req, res) => {
    try {
        const project = req.body;
        await projectModel.create(project);
        res.json({msg: "Proyecto agregado", project: project});
    } catch (error) {
        console.log(error);
    };
}

const GET_projectById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await projectModel.find({_id: id}).populate('utilities').lean();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const DELETE_project = async (req, res) => {
    try {
        const id = req.params.id;
        await projectModel.findByIdAndDelete(id);
        res.json({msg: "Proyecto eliminado"});
    } catch (error) {
        console.log(error);
    }
}

const PUT_project = async (req, res) => {
    try {
        const id = req.params.id;
        const project = req.body;
        await projectModel.updateOne(id, project);
        res.json({msg: "Proyecto actualizado"});
    } catch (error) {
        console.log(error);
    }
}


module.exports =  {
    GET_allProjects,
    POST_project,
    GET_projectById,
    PUT_project,
    DELETE_project
}