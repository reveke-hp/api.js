'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('alumno', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        nombre: {
          type: Sequelize.STRING
        },
        apellido: {
          type: Sequelize.STRING
        },
        dni: {
          type: Sequelize.INTEGER
        },
        id_carrera: {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreignKey: true
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
      return queryInterface.dropTable('alumno');
    }
  };