'use strict';
module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define('profesor', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    nro_matricula: DataTypes.INTEGER,
    id_materia:DataTypes.INTEGER
  }, {});
  profesor.associate = function(models) {
    profesor.belongsTo(models.materia
      ,{
        as : 'materia-Relacionada',  
        foreignKey: 'id_materia'     
      })
    };
  
  return profesor;
};