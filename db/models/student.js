'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  })
  //, {
  // classMethods: {
  //   //get all the students for a given school
  //   getAllWhereCampus(campusId){
  //     return Message.findAll({
  //       include: [{
  //         model: Campus,
  //         //as: 'from',
  //         where: { campusId: campusId }
  //       }, {
  //         model: Student,
  //         as: 'to'
  //       }]
  //     })
  //    })
