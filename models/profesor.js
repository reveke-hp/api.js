'use strict';

module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define('profesor', {
    dni: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    materia: DataTypes.STRING,
  }, {});

  profesor.associate = function(models){
    profesor.belongsTo(models.materia,{
        as : 'Materia-Relacionada',  
        foreignKey: 'id_materia'     
      })
      
  }
  
  return profesor;
};