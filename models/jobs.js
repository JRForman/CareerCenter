module.exports = function(sequelize, DataTypes) {
  var jobs = sequelize.define("jobs", {
    id: {
      Type: DataTypes.INT,
      allowNull: false,
      unique: true
    },
    occupationTitle: {
      Type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    category: {
      Type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    employment2016Thousands: {
      Type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    employment2026Thousands: {
      Type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    employmentChange20162026Percent: {
      Type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    occupationalOpenings20162026AnnualAverageThousands: {
      Type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    medianAnnualWage: {
      Type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    asCode: {
      Type: DataTypes.INT,
      allowNull: false,
      unique: true
    },
    typicalEntryLevelEducation: {
      Type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    educationCode: {
      Type: DataTypes.INT,
      allowNull: false,
      unique: true
    },
    workExperienceInARelatedOccupation: DataTypes.STRING,
    workExCode: {
      Type: DataTypes.INT,
      allowNull: false,
      unique: true
    },
    TypicalOnTheJobTraining: {
      Type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    trCode: {
      Type: DataTypes.INT,
      allowNull: false,
      unique: true
    },
    createdAt: {
      Type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    updatedAt: {
      Type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
  return jobs;
};
