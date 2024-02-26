const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'candidates',
    {
      candidate_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: true,
      },
      candidate_name: DataTypes.STRING,
      candidate_email: DataTypes.STRING,
      candidate_phoneno: DataTypes.STRING,
      candidate_skills: DataTypes.JSON,
      candidate_qualification: DataTypes.STRING,
      expected_salary: DataTypes.INTEGER,
      current_status: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
};
