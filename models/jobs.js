module.exports = function(sequelize, DataTypes) {
  var jobs = sequelize.define("jobs", {
    Category: DataTypes.STRING
  });
  return jobs;
};
