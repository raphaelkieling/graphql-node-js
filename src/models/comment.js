'use strict';

module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {});

  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.post, {
      foreignKey: {
        allowNull: false,
        field: 'post_id',
        name: 'post_id'
      }
    });

    comment.belongsTo(models.user, {
      foreignKey: {
        allowNull: false,
        field: 'user_id',
        name: 'user_id'
      }
    });
  };

  return comment;
};