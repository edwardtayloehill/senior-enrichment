'use strict'
const express = require('express')
const db =  require('../../db');
const Student = require('../../db/models/student');

const router = express.Router();

// get | get all students
router.get('/', (req, res, next) => {
    Student.findAll()
    .then(allStudents => res.send(allStudents))
    .catch(next)
})

router.get('/campus/:campusId', (req, res, next) => {
  Student.findAll({
    where: {
      campusId: req.params.campusId
    }
  })
  .then(allStudents => res.send(allStudents))
  .catch(next)
})

// get | get a student by id
router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(returnedStudent => res.status(200).send(returnedStudent))
  .catch(next)
})

//post | insert new student
router.post('/', (req, res, next) => {
  Student.create(req.body)
  .then( (newStudent) => {
    res.status(201).send(newStudent)
  })
  .catch(next)
})

//put | update info for one student
router.put('/:studentId', (req, res, next) => {
  Student.findOne({
    where: {
      id: req.params.studentId
    }
  })
  .then( targetStudent => {
    targetStudent.update(req.body)
    res.send(202);
  })
  .catch(next)
});

//delete | delete a campus by id
router.delete('/:studentId', (req, res, next) => {
  Student.destroy({
    where: {
      id: req.params.studentId
    }
  })
  .then( () => {
    res.status(204).end()
  })
  .catch(next)
})


module.exports = router;
