const { DataTypes } = require('sequelize');

module.exports = (sequelizeConnection) => {
  const Book = sequelizeConnection.define('Book', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sumary: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});

  console.log(Book === sequelizeConnection.models.Book);

  return Book;
};

