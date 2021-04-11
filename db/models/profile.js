'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      Profile.belongsTo(User, { foreignKey: "userId" })
    }
  };
  Profile.init({
    // TODO : validations
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      defaultValue: "Cash",
    },
    phoneNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: "profiles"
  });
  return Profile;
};