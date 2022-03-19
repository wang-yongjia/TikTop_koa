const Router = require('koa-router')
const { verifyAuth } = require('../middleware/auth.middleware')
const { avatarHandler, pictureHandler } = require('../middleware/file.middleware')
const { saveAvatarInfo, savePrictureInfo } = require('../controller/file.controller')

const fileRouter = new Router({ prefix: '/upload' })

fileRouter.post('/avatar', verifyAuth, avatarHandler, saveAvatarInfo)
fileRouter.post('/picture', verifyAuth, pictureHandler, savePrictureInfo)

module.exports = fileRouter
