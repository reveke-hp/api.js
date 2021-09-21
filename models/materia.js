'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('carrera', {
    nombre: DataTypes.STRING,
    id_carrera: DataTypes.INTEGER
  }, {});
  materia.associate = function(models){
      //asociations can be defined here
  }
  
  return materia;
};