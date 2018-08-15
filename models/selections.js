module.exports = function(sequelize, DataTypes) {
  var Selections = sequelize.define("Selected", {
    selectionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    abbreviatedName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    medianAnnualWage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    typicalEntryLevelEducation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Selections.associate = function(models) {
    Selections.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Selected;
};
