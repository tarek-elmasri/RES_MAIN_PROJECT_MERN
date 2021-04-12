'use strict';
const {
  Model
} = require('sequelize');

const { RESERVED_EMAILS, RESERVRED_USERNAMES } = require('../../src/constants')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Profile, Permission }) {
      // define association here
      User.hasOne(Profile, { foreignKey: "userId" })
      User.hasMany(Permission, { foreignKey: "userId" })
    }

    toJSON() {
      return {
        ...this.get(),
        password: undefined,
        id: undefined
      }
    }
  };
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Username Field is required" },
        notEmpty: { msg: "Username Field Can't be blank" },
        notIn: {
          args: RESERVRED_USERNAMES,
          msg: "Username is reserved"
        },
        len: [4, 20]
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: { msg: "Email field is required" },
        notEmpty: { msg: "Email field can't be blank" },
        isEmail: { msg: "Invalid Email format" },
        notIn: {
          args: RESERVED_EMAILS,
          msg: "Email is reserved"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    role: {
      type: DataTypes.ENUM(['Admin', 'Staff', 'User']),
      defaultValue: 'User',
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users"
  });
  return User;
};