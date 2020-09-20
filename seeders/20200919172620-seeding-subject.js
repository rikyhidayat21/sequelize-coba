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
      let subjects = JSON.parse(fs.readFileSync('./subjects.json', 'utf8'))
        .map(subject => ({...subject, createdAt: new Date(), updatedAt: new Date() }))
      
      return queryInterface.bulkInsert('Subjects', subjects, {})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Subjects', null, {})
  }
};
