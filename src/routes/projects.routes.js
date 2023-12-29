const express = require('express');
// Importa con la capitalización correcta
const ProjectsManager = require('../managers/projectsManager');





const projectRouter = express.Router();
const manager = new ProjectsManager();

projectRouter.get('/', async (_req, res, next) => {
    try {
        res.send(await manager.GET_allProjects());
    } catch (error) {
        next(error);
    }
    
})


projectRouter.post('/project', async (req, res, next) => {
    try {
        const project = req.body;
        res.send(await manager.POST_project(project));
    } catch (error) {
        next(error);
    }
})



module.exports = projectRouter;