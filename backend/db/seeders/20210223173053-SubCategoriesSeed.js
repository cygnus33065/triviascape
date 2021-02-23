'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('SubCategories', [
        {name: "Baseball", categoryId: 1},
        {name: "Football", categoryId: 1},
        {name: "Hockey", categoryId: 1},
        {name: "Basketball", categoryId: 1},
        {name: "Auto Racing", categoryId: 1},
        {name: "Science Fiction", categoryId: 2},
        {name: "Romance", categoryId: 2},
        {name: "Comedy", categoryId: 2},
        {name: "Action and Adventure", categoryId: 2},
        {name: "Documentery", categoryId: 2},
        {name: "Biology", categoryId: 3},
        {name: "Physics", categoryId: 3},
        {name: "Chemestry", categoryId: 3},
        {name: "Mathematics", categoryId: 3},
        {name: "Earth Science", categoryId: 3},
        {name: "Computer Science", categoryId: 4},
        {name: "Computer Programming", categoryId: 4},
        {name: "Engineering", categoryId: 4},
        {name: "Computer Networks", categoryId: 4},
        {name: "Information Technology", categoryId: 4},
        {name: "Great People", categoryId: 5},
        {name: "American History", categoryId: 5},
        {name: "World History", categoryId: 5},
        {name: "World Events", categoryId: 5},
        {name: "US Supreme Court", categoryId: 5},
        {name: "Rock and Metal", categoryId: 6},
        {name: "Hip Hop", categoryId: 6},
        {name: "Classical Music", categoryId: 6},
        {name: "Pop", categoryId: 6},
        {name: "Jazz", categoryId: 6},
        {name: "Pop Culture", categoryId: 7},
        {name: "Famous People", categoryId: 7},
        {name: "World Leaders", categoryId: 7},
        {name: "Awards and Recognition", categoryId: 7},
        {name: "Unusual Happenings", categoryId: 7},
        {name: "Video Games", categoryId: 8},
        {name: "Action Figures and Dolls", categoryId: 8},
        {name: "Card Games", categoryId: 8},
        {name: "Board Games", categoryId: 8},
        {name: "Baby Toys", categoryId: 8},
        {name: "Horror", categoryId: 9},
        {name: "Romance", categoryId: 9},
        {name: "Science Fiction", categoryId: 9},
        {name: "Drama", categoryId: 9},
        {name: "Non Fiction", categoryId: 9},
        {name: "Ingredients", categoryId: 10},
        {name: "Cooking", categoryId: 10},
        {name: "Cooking Techniques", categoryId: 10},
        {name: "Dishes", categoryId: 10},
        {name: "Famous Chefs", categoryId: 10},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('SubCategories', null, {});
  }
};
