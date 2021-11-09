'use strict';

module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    cod_aula: DataTypes.INTEGER,
  }, {});
  
  materia.associate = function(models){
    materia.belongsTo(models.aula,{
        as : 'Aula-Relacionada',  
        foreignKey: 'cod_aula'     
      })
  }
  
  return materia;
};