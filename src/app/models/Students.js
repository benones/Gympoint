import Sequelize, { Model } from 'sequelize';
// import bcrypt from 'bcryptjs';

class Students extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.STRING,
        peso: Sequelize.STRING,
        altura: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Students;
