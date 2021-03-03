require('dotenv/config')

module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "vextaDB",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5433
  },
  production: process.env.DATABASE_URL
}
