'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    id_carrera: DataTypes.INTEGER,
    nombre: DataTypes.STRING
  }, {});
  
  alumno.associate = function(models){
    alumno.belongsTo(models.carrera,{
        as : 'Alumno-Relacionado',  
        foreignKey: 'dni_alumno'     
      })
      
  }

  return carrera;
};