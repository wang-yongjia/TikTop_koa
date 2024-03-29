const { create, getMomentById, getMomentList, updateMomentById, removeMomentById, hasLabel, addLabel } = require('../service/moment.service')
class MomentController {
  async create(ctx, next) {
    const userId = ctx.user.id
    const content = ctx.request.body.content
    const result = await create(userId, content)
    ctx.body = result
  }

  async detail(ctx, next) {
    const momentId = ctx.params.momentId
    const result = await getMomentById(momentId)
    ctx.body = result
  }

  async list(ctx, next) {
    const { offset, size } = ctx.query
    const result = await getMomentList(offset, size)
    ctx.body = result
  }

  async update(ctx, next) {
    const { momentId } = ctx.params
    const { content } = ctx.request.body
    const { id } = ctx.user
    const result = await updateMomentById(momentId, content)
    ctx.body = result
  }

  async remove(ctx, next) {
    const { momentId } = ctx.params
    const result = await removeMomentById(momentId)
    ctx.body = result
  }

  async addLabels(ctx, next) {
    const { momentId } = ctx.params
    const { labels } = ctx
    for (let label of labels) {
      const isExist = await hasLabel(momentId, label.id)
      if (!isExist) await addLabel(momentId, label.id)
    }
    ctx.body = '给动态添加标签成功'
  }
}

module.exports = new MomentController()
