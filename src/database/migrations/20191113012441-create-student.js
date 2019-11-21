// Criar migrations >>> yarn add sequelize-cli
// yarn sequelize migration:create --name=create-students
// yarn sequelize db:migrate >> cria tabelas na pasta migrations
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        PrimaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      idade: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      peso: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      altura: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },

      student: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('students');
  },
};
