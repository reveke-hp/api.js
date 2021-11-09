'use strict';

module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define('profesor', {
    id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    id_materia: DataTypes.INTEGER,
  }, {});

  profesor.associate = function(models){
    profesor.belongsTo(models.materia,{
        as : 'Materia-Relacionada',  
        foreignKey: 'id_materia'     
      })
  }
  
  return profesor;
};