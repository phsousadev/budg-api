import Sequelize from "sequelize"
import DatabaseConfig from '../config/database'
import User from "../app/models/User"

const models = [User]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(DatabaseConfig)

    models.map(model => model.init(this.connection))
  }
}

export default new Database()