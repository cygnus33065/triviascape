'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Categories', [
        {name: "Sports"},
        {name: "Movies and TV"},
        {name: "Science"},
        {name: "Technology"},
        {name: "History"},
        {name: "Music"},
        {name: "Current Events"},
        {name: "Toys and Games"},
        {name: "Books"},
        {name: "Food"},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Categories', null, {});
  }
};
