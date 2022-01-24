const express = require('express');

const skillRouter = express.Router();

const Skill = require('../models/skill')

//index 

skillRouter.get('/', async (req, res) =>{
     Skill.find({}, (err, skills) => {
        res.json(skills)
     })
    })

//create

skillRouter.post('/', (req, res) =>{
    Skill.create(req.body, (err, skill) =>{
        res.json(skill)
    })
})


module.exports = skillRouter;