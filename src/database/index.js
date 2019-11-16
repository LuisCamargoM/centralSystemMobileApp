/*  DATABASE CONNECTION FILE */
  import Sequelize from "sequelize";
  import databaseConfig from "../config/database";

  import User from "../app/models/User";
  import News from "../app/models//News";

  const models = [User, News];

  class Database {
    constructor() {
      this.init();
    }
    // Realiza a conexao e Carrega os models
    init() {
      this.connection = new Sequelize(databaseConfig);
      models.map(model => model.init(this.connection));
    }
  }

export default new Database();
