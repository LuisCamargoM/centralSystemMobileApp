/* SOLAR_PANEL MODEL FILE */
import { Model, Sequelize } from "sequelize";

class News extends Model {
  static init(sequelize) {
    super.init(
      {        
        title: Sequelize.STRING,
        description: Sequelize.STRING,   
      },
      {
        sequelize
      }
    );
  }
}

export default News;
