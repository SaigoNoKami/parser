const {Sequelize} = require('sequelize')
let team = require('./models/model.team.js')
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_USER_PASSWORD,
  {
    host: 'localhost',
    dialect: process.env.SEQUELIZE_DIALECT,
  }
)

let dbTeam = team(sequelize)


sequelize.sync().catch(function (err) {
  console.log(err)
  procces.exit(1)
})

module.exports = {team: dbTeam}
