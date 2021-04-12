'use strict';
const {
  Model
} = require('sequelize');
const { PAYMENT_OPTIONS } = require('../../src/constants');
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

    toJSON() {
      return {
        ...this.get(),
        userId: undefined,
        id: undefined
      }
    }
  };
  Profile.init({
    // TODO : validations
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paymentOption: {
      type: DataTypes.ENUM(PAYMENT_OPTIONS),
      defaultValue: "Cash",
      validate: {
        isIn: {
          args: PAYMENT_OPTIONS,
          msg: "Invalid Payment Option"
        }
      }
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