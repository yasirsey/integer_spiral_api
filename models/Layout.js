const mongoose = require('mongoose')

const layoutSchema = new mongoose.Schema({
    data: [
        [
            {
                type: Number,
            },
        ],
    ],
})

const Layout = mongoose.model('Layout', layoutSchema)

module.exports = Layout
