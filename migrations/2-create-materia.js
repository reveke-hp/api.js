'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('materia', {
        id_materia: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        nombre: {
          type: Sequelize.STRING
        },
        dni_alumno:{
          type: Sequelize.INTEGER
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('materia');
    }
  };