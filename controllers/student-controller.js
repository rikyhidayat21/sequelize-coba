const { Student } = require('../models')

class StudentController {
  static getAllStudent(req, res) {
    Student.findAll()
      .then(data => res.render('student', {data}))
      .catch(err => res.send(err))
  }

  static getAddForm(req, res) {
    res.render('addStudent')
  }

  static postAddStudent(req, res) {
    let {first_name, last_name, email, gender, birth_date} = req.body
    Student.create(req.body)
      .then( data => res.redirect('/students') )
      .catch(err => res.send(err))
  }

  static getEditForm(req, res) {
    Student.findByPk(req.params.id)
      .then(data => res.render('editStudent', {data}))
      .catch(err => res.send(err))
  }

  static postEditStudent(req, res) { // post edit belum
    let {first_name, last_name, email, gender, birth_date} = req.body
    Student.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(data => res.send('wellhelloo'))
      .catch(err => res.send(err))
  }

  static getDeleteStudent(req, res) {
    Student.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.redirect('/students'))
      .catch(err => res.send(err))
  }

}

module.exports = StudentController 