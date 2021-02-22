'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    deckId: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    Question.belongsTo(models.Deck, {foreignKey: 'deckId'})
  };
  return Question;
};
