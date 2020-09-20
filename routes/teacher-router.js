const router = require('express').Router()
const TeacherController = require('../controllers/teacher-controller')

router.get('/', TeacherController.getAllTeacher)
router.get('/:id', TeacherController.getById)

module.exports = router