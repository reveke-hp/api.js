'use strict';
module.exports = (sequelize, DataTypes) => {
  const instituto = sequelize.define('instituto', {
    id_instituto: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
  }, {});
  instituto.associate = function(models){

  }
  
  return instituto;
};