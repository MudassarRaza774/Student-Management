const model = require('../Models')
const StudentModel = model.students

//Add student
const addStudent = async (req, res) => {
    const {
        firstName, lastName, classes, gender, age
    } = req.body
    const result = await StudentModel.create({ firstName, lastName, classes, age, gender })
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(400).send("Every value must be given")
    }
}

//Get Students
const getStudents = async (req, res) => {
    const result = await StudentModel.findAll({})
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(200).send("some error occured")
    }
}

//Get Student By Id
const getStudentById = async (req, res) => {
    const id = req.params.id
    const result = await StudentModel.findOne({ where: { id } })
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Id not found or an error occured")
    }
}

//Update Student
const updateStudent = async (req, res) => {
    const id = req.params.id
    console.log(req.body, id)
    const result = await StudentModel.update(req.body, { where: { id } })
    if (result[0] === 1) {
        res.status(200).send(result)
    } else {
        res.status(400).send("An error occured or data don't send properly")
    }
}

//Delete Student
const deleteStudent = async (req, res) => {
    const id = req.params.id
    const result = await StudentModel.destroy({ where: { id } })
    if (result) {
        res.status(200).send("Student Record Deleted Successfully")
    } else {
        res.status(404).send("Given id not found or some error occurred")
    }
}

module.exports = { addStudent, getStudents, getStudentById, updateStudent, deleteStudent }