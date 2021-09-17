'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locais', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
      },

      local: {
        type: Sequelize.STRING,
        allowNull: true
      },

      nome_local: {
        type: Sequelize.STRING,
        allowNull: true
      },

      foto: {
        type: Sequelize.STRING,
        allowNull: true
      },

      lat: {
        type: Sequelize.STRING,
        allowNull: true
      },

      lon: {
        type: Sequelize.STRING,
        allowNull: true
      },

      descricao: {
        type: Sequelize.STRING,
        allowNull: true
      },

      id_cidade: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'cidades',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('locais');
  }
};
