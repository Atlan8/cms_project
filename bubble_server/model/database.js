/**
 * 封装数据库连接
 */
let mysql = require('mysql')
let database = {}

// 查询操作
database.select = function (connection, sql, callback) {
  let select = []
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err)
      return false
    }
    callback(result)
  })
  // console.log(select)
}

// 插入数据操作
database.insert = function (connection, sql, params, callback) {
  connection.query(sql, params, function (error, result) {
    console.log(flieds)
    if (error) console.log(error)
    // callback(result.insertId) // 返回插入的 id
    console.log(result)
    callback(result)
  })
}

// 关闭数据库操作
database.close = function (connection) {
  // 关闭数据库连接
  connection.end((error) => {
    if (error) {
      return error
    } else {
      console.log('数据库连接已关闭')
    }
  })
}

// 连接数据库操作
database.connection = function () {
  // 数据库基本配置
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'bubble_mall',
    port: 3306
  })
  // 连接到数据库
  connection.connect((error) => {
    if (error) {
      console.log(error)
      return false
    }
  })
  // console.log(connection)
  return connection
}

module.exports = database
