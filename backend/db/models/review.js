'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    placeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    review: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  review.associate = function(models) {
    review.belongsTo(models.User, { foreignKey: 'userId' });
    review.belongsTo(models.Place, { foreignKey: 'placeId' });
  };
  return review;
};
