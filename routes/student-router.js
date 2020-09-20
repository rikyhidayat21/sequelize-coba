const router = require('express').Router()
const StudentController = require('../controllers/student-controller')

router.get('/', StudentController.getAllStudent)
router.get('/add', StudentController.getAddForm)
router.post('/add', StudentController.postAddStudent)

router.get('/:id/edit', StudentController.getEditForm)
router.post('/:id/edit', StudentController.postEditStudent)

router.get('/:id/delete', StudentController.getDeleteStudent)
module.exports = router