'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    nombre: DataTypes.STRING,
    id_instituto: DataTypes.INTEGER
  }, {});

  carrera.associate = function(models) {
  	carrera.belongsTo(models.instituto
    ,{
      as : 'instituto-Relacionado',  
      foreignKey: 'id_instituto'     
    })
  };

  return carrera;
};