'use strict';
module.exports = (sequelize, DataTypes) => {
  const alumno = sequelize.define('alumno', {
    dni_alumno: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    carrera: DataTypes.STRING,

  }, {});
  alumno.associate = function(models){
    alumno.belongsTo(models.carrera,{
        as : 'Carrera-Relacionada',  
        foreignKey: 'id_carrera'     
      })
  }
  
  return alumno;
};