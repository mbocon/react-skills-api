const express = require('express');
const skillsRouter = express.Router();
const Skill = require('../models/skill');
const seedData = require('../models/seedData');

// seed route
skillsRouter.get('/seed', async (req, res) => {
   await Skill.deleteMany({});
   Skill.create(seedData, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/skills');
        }
    });
});

// index route
skillsRouter.get('/',  async (req, res) => {
    const skills = await Skill.find({});
    res.json(skills);
});

// create route 
skillsRouter.post('/', async (req, res) => {
    const newSkill = await Skill.create(req.body);
    res.json(newSkill);
});

module.exports = skillsRouter;
