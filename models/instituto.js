'use strict';

module.exports = (sequelize, DataTypes) => {
  const instituto = sequelize.define('instituto', {
    id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
  }, {});
  

  return instituto;
};