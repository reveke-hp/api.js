'use strict';

module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    id_materia: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
  }, {});
  
  materia.associate = function(models){
    materia.belongsTo(models.profesor,{
        as : 'Profesor-Relacionado',  
        foreignKey: 'dni'     
      })
      
  }
  
  return materia;
};