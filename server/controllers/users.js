const User = require('../database/schema/users')

class UsersCtrl {
  async find (ctx) {
    ctx.body = await User.find()
  }
  async create (ctx) {
    const { name } = ctx.request.body
    const repeateUser = await User.findOne({ name })
    if (repeateUser) {
      ctx.throw(409, '用户名已经存在')
    }
    const user = await new User(ctx.request.body).save()
    ctx.body = user
  }
  async update (ctx) {
    const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body)
    if (!user) {
      ctx.throw(404, '用户不存在')
      return
    }
    ctx.body = user
  }
  async deleted (ctx) {
    // delete方法没有请求体  所以不能使用请求体传参 (用ctx.query 或者ctx.params)
    // console.log(111, ctx.params.id)
    const user = await User.findByIdAndRemove(ctx.params.id)
    // const user = await User.deleteOne({ _id: ctx.params.id })  //也可以这么写
    if (!user) {
      ctx.throw(404, '用户不存在')
      return
    }
    ctx.status = 204
  }
}
module.exports = new UsersCtrl()
