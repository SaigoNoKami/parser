const {TeamService} = require('../services/service.team.js')


module.exports = async function (fastify) {
    const teamService = new TeamService()

    fastify.route({
        method: 'GET',
        path: '/team',
        handler: async (request, reply) => {
          let team = await teamService.findAll()
          reply.send(team)
        },
      })
  
    fastify.route({
      method: 'GET',
      path: '/team/double/:name/:position',
      handler: async (request, reply) => {
        let persons = await teamService.find('name', request.params.name)
        for(person of persons){
            if(person.position == request.params.position){
                reply.send(person)
            }
        }
        reply.send('person not found')
      },
    })
    fastify.route({
        method: 'GET',
        path: '/team/name/:name',
        handler: async (request, reply) => {
          let persons = await teamService.find('name', request.params.name)
          if(!persons){
            reply.send('persons not found')
          }
          reply.send(persons)
        },
      })

      fastify.route({
        method: 'GET',
        path: '/team/position/:position',
        handler: async (request, reply) => {
          let persons = await teamService.find('position', request.params.position)
          if(!persons){
            reply.send('persons not found')
          }
          reply.send(persons)
        },
      })

  }
  