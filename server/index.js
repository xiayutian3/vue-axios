const Koa = require('koa')
// 支持json form  文件 传输
const koabody = require('koa-body')
const path = require('path')
const cors = require('koa2-cors')
const connect = require('./database')
const routing = require('./routers')

const app = new Koa()
// 连接数据库
;(async () => {
  await connect()
})()
app.use(cors())
app.use(koabody({
  multipart: true, // 启用支持文件
  formidable: { // node 一个npm包，用法跟她本身一样， koabody引用了这个包
    uploadDir: path.join(__dirname, '/public/uploads'), // 指定上传目录
    keepExtensions: true // 保留拓展名（默认为false）
  }
}))
// 注册所有的路由
routing(app)

app.use(async ctx => {
  ctx.body = 'hello world11'
})
app.listen(3000, () => {
  console.log('koa2服务已启动在3000端口')
})
