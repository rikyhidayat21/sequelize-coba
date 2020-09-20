const router = require('express').Router()
const HomeController = require('../controllers')

router.get('/', HomeController.landingPage)

module.exports = router