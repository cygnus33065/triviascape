'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  SubCategory.associate = function(models) {
    // associations can be defined here
  };
  return SubCategory;
};