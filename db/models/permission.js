'use strict';
const {
  Model
} = require('sequelize');
const { PERMISSION_TYPES } = require('../../src/constants');

module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      Permission.belongsTo(User, { foreignKey: "userId" })
    }

    toJSON() {
      return { ...this.get(), userId: undefined, id: undefined }
    }

  };
  Permission.init({
    type: {
      type: DataTypes.ENUM(Object.values(PERMISSION_TYPES)),
      allowNull: true,
      validate: {
        isIn: {
          args: Object.values(PERMISSION_TYPES),
          msg: "Invalid Permission Type"
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Permission',
    tableName: "permissions"
  });
  return Permission;
};