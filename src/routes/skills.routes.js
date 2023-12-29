const express = require('express');
const ProjectsManager = require('../managers/projectsManager');



const skillRouter = express.Router();
const manager = new ProjectsManager();

skillRouter.get('/', async (_req, res, next) => {
    try {
        res.send(await manager.GET_allSkills());
    } catch (error) {
        next(error);
    }
})


skillRouter.post('/skill', async (req, res, next) => {
    try {
        const auxSkill = req.body;
        res.send(await manager.POST_skill(auxSkill));
    } catch (error) {
        console.log(error);
        next(error);
    }
})


module.exports = skillRouter;