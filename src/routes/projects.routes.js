const express = require('express');
const {GET_allProjects, POST_project, GET_projectById, PUT_project, DELETE_project} = require('../controllers/projects.controller')


const projectRouter = express.Router();

projectRouter.get('/', GET_allProjects);

projectRouter.post('/', POST_project);

projectRouter.get('/:id', GET_projectById);

projectRouter.put('/:id', PUT_project);

projectRouter.delete('/:id', DELETE_project);

module.exports = projectRouter;