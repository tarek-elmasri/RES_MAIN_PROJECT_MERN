'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        //to set into standard_user_avatar
        defaultValue: ""
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      paymentOption: {
        type: DataTypes.ENUM(['Cash', 'Credit Card', 'Mada']),
        defaultValue: "Cash"
      },
      phoneNo: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('profiles');
  }
};