const express = require('express');
const {getProjects, getProjectById, insertProject, updateProject, deleteProject, insertSkillInProject, deleteSkillInProject} = require('../controllers/projects.controller')


const projectRouter = express.Router();

projectRouter.get('/', getProjects);

projectRouter.post('/', insertProject);

projectRouter.get('/:id', getProjectById);

projectRouter.put('/:id', updateProject);

projectRouter.delete('/:id', deleteProject);

projectRouter.put('/:projectId/:skillId', insertSkillInProject);

projectRouter.delete('/:projectId/:skillId', deleteSkillInProject);

module.exports = projectRouter;