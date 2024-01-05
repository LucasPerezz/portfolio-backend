const express = require('express');
const {GET_allSkills, POST_skill, DELETE_skill, GET_skillById, PUT_skill} = require('../controllers/skills.controller');

const skillRouter = express.Router();

skillRouter.get('/', GET_allSkills);

skillRouter.post('/', POST_skill);

skillRouter.get('/:id', GET_skillById);

skillRouter.delete('/:id', DELETE_skill);

skillRouter.put('/:id', PUT_skill);

module.exports = skillRouter;