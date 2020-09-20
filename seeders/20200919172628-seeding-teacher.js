'use strict';
const fs = require('fs')
module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      let teachers = JSON.parse(fs.readFileSync('./teachers.json', 'utf8'))
        .map(teacher => ({...teacher, createdAt: new Date(), updatedAt: new Date() }))

      return queryInterface.bulkInsert('Teachers', teachers, {})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Teachers', null, {})
  }
};
