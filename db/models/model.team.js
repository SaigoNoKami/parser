const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  return sequelize.define('team', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    position:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description:{
        type: Sequelize.TEXT,
    },
  })
}
