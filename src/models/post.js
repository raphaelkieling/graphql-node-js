'use strict';

module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.BLOB({
        length: 'long'
      }),
      allowNull: false
    }
  }, {});

  post.associate = function(models) {
    // associations can be defined here
    post.belongsTo(models.user, {
      foreignKey: {
        allowNull: false,
        field: 'author_id',
        name: 'author_id'
      }
    });
  };

  return post;
};