const MongoClient = require("mongodb").MongoClient

const url = 'mongodb://localhost:27017'

const dbname = 'project'

// 封装数据库连接的方法
function connect(callback) {
  MongoClient.connect(url, function (err, client) {
    if (err) {
      console.log("数据库连接错误", err)
    } else {
      const db = client.db(dbname)
      callback && callback(db)
      client.close()
    }
  })
}

// 使用commonJS语法将这个方法抛出
module.exports = {
  connect
}