const Router = require('koa-router')
const router = new Router({ prefix: '/users' })
const { find, create, update, deleted } = require('../controllers/users')

router.get('/', find)
router.post('/', create)
router.patch('/:id', update)
router.delete('/:id', deleted)

module.exports = router
