
module.exports = function(sequelize, DataTypes) {
  var Selected = sequelize.define("Selected", {
    SelectedId: {
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
 Selected.associate= function(models){
     Selected.belongsTo(models.User,{
         foreignKey:{
             allowNull:false
         }
     })

  return Selected;
};