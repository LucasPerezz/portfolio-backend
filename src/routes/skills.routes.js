const express = require('express');
const {getSkills, insertSkill, deleteSkill, getSkillById, updateSkill} = require('../controllers/skills.controller');

const skillRouter = express.Router();

skillRouter.get('/', getSkills);

skillRouter.post('/', insertSkill);

skillRouter.get('/:id', getSkillById);

skillRouter.delete('/:id', deleteSkill);

skillRouter.put('/:id', updateSkill);

module.exports = skillRouter;