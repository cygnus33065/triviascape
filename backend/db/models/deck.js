'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  Deck.associate = function(models) {
    Deck.hasMany(models.Question, {foreignKey: 'deckId'})
    Deck.belongsTo(models.User, {foreignKey: 'userId'})
    Deck.belongsTo(models.SubCategory, {foreignKey: 'categoryId'})
  };
  return Deck;
};
