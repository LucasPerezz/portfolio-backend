import express from 'express';
import projectsManager from '../manager/projects.manager';

const projectRouter = express.Router();


projectRouter.get('/', async (_req, res, next) => {
    try {
        res.send(await projectsManager.GET_allProjects());
    } catch (error) {
        next(error);
    }
    
})


projectRouter.post('/project', async (req, res, next) => {
    try {
        const project = req.body;
        res.send(await projectsManager.POST_project(project));
    } catch (error) {
        next(error);
    }
})



export default projectRouter;