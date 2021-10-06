"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("avaliacoes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
      },

      nome_usuario: {
        type: Sequelize.STRING(50),
      },

      nota: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },

      comentario: {
        type: Sequelize.STRING(500),
      },

      id_local: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "locais",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("avaliacoes");
  },
};
