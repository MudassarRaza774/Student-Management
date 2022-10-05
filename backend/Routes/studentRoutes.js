const express = require('express')
const Router = express.Router()

const {
    addStudent, getStudents, updateStudent, deleteStudent, getStudentById
} = require('../Controller/studentController')


Router.post('/', addStudent)
Router.get('/', getStudents)

Router.get('/:id', getStudentById)
Router.delete('/:id', deleteStudent)
Router.patch('/:id', updateStudent)

module.exports = Router