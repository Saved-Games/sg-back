module.exports = {

  development: {
    dialect: 'mysql',
    host: process.env.HOST,
    port: process.env.PORT,
    username: 'root',
    password: process.env.PASSWORD,
    database: 'sg_db',
    operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  }

}