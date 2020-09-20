const { Subject } = require('../models')

class SubjectController {
  static getAllSubject(req, res) {
    Subject.findAll() 
      .then(data => res.render('subject', {data}))
      .catch(err => res.send(err))
  }

  static getById(req, res) {
    Subject.findByPk(req.params.id)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  }
}

module.exports = SubjectController