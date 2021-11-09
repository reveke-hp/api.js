'use strict';
module.exports = (sequelize, DataTypes) => {
  const aula = sequelize.define('aula', {
    id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    capacidad: DataTypes.INTEGER,
  }, {});

  return aula;
};