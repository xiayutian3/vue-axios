// 连接数据库
const mongoose = require('mongoose')
const { db } = require('../config')

const connect = () => {
  mongoose.connect(db, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
  let maxConnectTimes = 0
  return new Promise((resolve, reject) => {
    // 把所有连接放到这里

    // 增加数据库连接的事件监听
    mongoose.connection.on('disconnection', (err) => {
      // 进行重连
      if (maxConnectTimes <= 3) {
        maxConnectTimes++
        mongoose.connect(db)
      } else {
        reject(err)
        throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
      }
    })
    mongoose.connection.on('error', (err) => {
      // 进行重连
      if (maxConnectTimes <= 3) {
        maxConnectTimes++
        mongoose.connect(db)
      } else {
        reject(err)
        throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
      }
    })
    // 链接打开的时候
    mongoose.connection.once('open', () => {
      resolve()
      console.log('MongoDB Connected successfully!')
    })
  })
}
module.exports = connect
