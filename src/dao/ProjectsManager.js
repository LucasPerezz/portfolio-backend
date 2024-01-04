const projectModel = require('../models/projects.model');
const skillsModel = require('../models/skills.model');


class ProjectsManager {
    constructor() {}

    async GET_allProjects() {
        try {
            const result = await projectModel.find().populate('utilities').lean();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
    

    async GET_allSkills() {
        try {
            const result = await skillsModel.find();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async POST_project(project) {
        try {
            await projectModel.create(project);
            return "projecto cargado";
        } catch (error) {
            console.log(error);
        }
    }

    async POST_skill(skill) {
        try {
            await skillsModel.create(skill);
            return "skill cargado"
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports =  ProjectsManager;