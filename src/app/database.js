// const mysql = require('mysql2')
const mysql = require('mysql2/promise')

const config = require('./config')

const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
})
connections
  .getConnection()
  .then((conn) => {
    console.log('数据库连接成功')
  })
  .catch((err) => {
    console.log('数据库连接失败', err)
  })

module.exports = connections
