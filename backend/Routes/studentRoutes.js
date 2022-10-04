const express = require('express')
const Router = express.Router()

const {
    addStudent, getStudents, updateStudent, deleteStudent, getStudentById
} = require('../Controller/studentController')

Router.post('/addStudent', addStudent)
Router.get('/allStudents', getStudents)

Router.get('/allStudents/:id', getStudentById)
Router.delete('/deleteStudent/:id', deleteStudent)
Router.patch('/updateStudent/:id', updateStudent)

module.exports = Router