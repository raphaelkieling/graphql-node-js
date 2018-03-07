"use strict";

const bcryptjs = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          const salt = bcryptjs.genSaltSync();
          user.password = bcryptjs.hashSync(user.password, salt);
        }
      }
    }
  );

  user.associate = function(models) {
    // associations can be defined here
  };

  user.prototype.isPassword = (encodedPassword, password) => {
    return bcryptjs.compareSync(password, encodedPassword);
  };

  return user;
};
