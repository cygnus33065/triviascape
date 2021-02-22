'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  SubCategory.associate = function(models) {
    SubCategory.belongsTo(models.Category, {foreignKey: 'categoryId'})
  };
  return SubCategory;
};
