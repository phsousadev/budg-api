import Sequelize from "sequelize"
import DatabaseConfig from '../config/database'

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(DatabaseConfig)
  }
}

export default new Database()