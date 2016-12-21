'use strict'
const express = require('express')
const db =  require('../../db');
const Campus = require('../../db/models/campus');


const router = express.Router();

// get | get all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(allCampuses => res.send(allCampuses))
  .catch(next)
})

// get | get a campus by id
router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
  .then(returnedCampus => res.send(returnedCampus))
  .catch(next)
})

//post | insert new campus
router.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then( (newCampus) => {
    res.status(201).send(newCampus)
  .catch(next)
  })
})

//put | update campus info for one campus
router.put('/:campusId', (req, res, next) => {
  Campus.findOne({
    where: {
      id: req.params.campusId
    }
  })
  .then(targetCampus => {
    targetCampus.update(req.body);
    res.send(201);
  })
})

//delete | delete a campus by id
router.delete('/:campusId', (req, res, next) => {})

module.exports = router;
