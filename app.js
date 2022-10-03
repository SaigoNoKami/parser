const fastify = require('fastify')
const autoload = require('@fastify/autoload')
const path = require('path')
let parser = require('./parse.js')
const {TeamService} = require('./services/service.team.js')
require('dotenv').config()

const server = fastify({logger: true})

parser().then(team =>{
  this.teamService = new TeamService
  for(let person of team){
    if(!this.teamService.findBy('description', person.description)){
      this.teamService.add(person.name, person.position, person.description).catch(e => {console.log(e)})
    }
    
  }
})

const start = async () => {
  server.register(autoload, {
    dir: path.join(__dirname, 'routes'),
  })
  server.listen({port: process.env.PORt || 8000})
}
start()