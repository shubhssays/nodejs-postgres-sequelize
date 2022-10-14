"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      vehicle_types: {
        allowNull: true,
        type: Sequelize.JSONB,
      },
      is_agreed: {
        default: false,
        type: Sequelize.BOOLEAN,
      },
      is_email_verified: {
        default: false,
        type: Sequelize.BOOLEAN,
      },
      is_mobile_verified: {
        default: false,
        type: Sequelize.BOOLEAN,
      },
      is_active: {
        default: true,
        type: Sequelize.BOOLEAN,
      },
      is_deleted: {
        default: false,
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      created_by: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updated_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
