const router = require('express').Router()
const homeRouter = require('./home-router')
const teacherRouter = require('./teacher-router')
const subjectRouter = require('./subject-router')
const studentRouter = require('./student-router')

router.use('/', homeRouter)

router.use('/teachers', teacherRouter)

router.use('/subjects', subjectRouter)

router.use('/students', studentRouter)

module.exports = router