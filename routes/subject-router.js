const router = require('express').Router()
const RouterController = require('../controllers/subject-controller')

router.get('/', RouterController.getAllSubject)
router.get('/:id', RouterController.getById)


module.exports = router