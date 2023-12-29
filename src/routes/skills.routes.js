import express from 'express'
import projectsManager from '../manager/projects.manager';
const skillRouter = express.Router();


skillRouter.get('/', async (_req, res, next) => {
    try {
        res.send(await projectsManager.GET_allSkills());
    } catch (error) {
        next(error);
    }
})


skillRouter.post('/skill', async (req, res, next) => {
    try {
        const auxSkill = req.body;
        res.send(await projectsManager.POST_skill(auxSkill));
    } catch (error) {
        console.log(error);
        next(error);
    }
})


export default skillRouter;