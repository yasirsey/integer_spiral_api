const router = require('express').Router()

const layoutRouter = require('./layout')

router.use('/layouts', layoutRouter)

module.exports = router