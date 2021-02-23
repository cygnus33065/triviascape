'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  SubCategory.associate = function(models) {
    SubCategory.belongsTo(models.Category, {foreignKey: 'categoryId'})
    SubCategory.hasOne(models.Deck, {foreignKey: 'categoryId'})
  };
  return SubCategory;
};
