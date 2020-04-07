module.exports = {

  development: {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  }

}