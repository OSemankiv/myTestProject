module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  },

  userName: Sequelize.STRING
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
}
