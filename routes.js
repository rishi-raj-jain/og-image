const { nextRoutes } = require('@edgio/next')
const { Router } = require('@edgio/core/router')

export default new Router({ indexPermalink: true }).use(nextRoutes)
