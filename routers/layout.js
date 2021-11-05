const router = require('express').Router()

const { layout } = require('../controllers/index')

router.post('/', layout.create)
router.get('/', layout.getAll)
router.get('/value', layout.getValueOfLayout)

module.exports = router