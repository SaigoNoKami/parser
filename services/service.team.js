const team = require('../db/db.js').team

class TeamService {
  constructor() {
    this.model = team
  }

  async findBy(key, value) {
    return this.model.findOne({where: {[key]: value}})
  }
  async findById(Id) {
    return this.model.findByPk(Id)
  }

  async add(name, position, description) {
    return this.model.create({
        name: name,
        position: position,
        description: description,
    })
  }

  async edit(id, data, key) {
    return this.model.update(
      {[key]: data},
      {
        where: {
          id: id,
        },
      }
    )
  }

  async delete(id) {
    this.model.destroy({
      where: {
        id: id,
      },
    })
  }

  async findAll() {
    return this.model.findAll()
  }

  async find(key, value){
    return this.model.findAll({where: {[key]: value}})
  }

  
}
module.exports = {TeamService}