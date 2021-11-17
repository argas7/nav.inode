const { DataTypes } = require('sequelize');

module.exports = (sequelizeConnection) => {
  const User = sequelizeConnection.define('User', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {});

  console.log(User instanceof sequelizeConnection.models.User);

  return User;
}
