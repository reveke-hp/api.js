'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre: DataTypes.STRING,
    id_aula: DataTypes.INTEGER
  }, {});


  materia.associate = function(models) {
  	materia.belongsTo(models.aula
    ,{
      as : 'aula-Relacionada',  
      foreignKey: 'id_aula'     
    })
  };

  return materia;
};