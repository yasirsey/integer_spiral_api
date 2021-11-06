const Layout = require('../models/Layout')
const spiral = require('../helpers/spiral')

const create = async (req, res, next) => {
    try {
        console.log(req.body)
        const { x, y } = req.body

        if((! (x && y)) || (x <= 0 || y <= 0)) return res.status(400).json({ error: 'x and y dimensions are required and must be positive integers.' })

        else {
            const data = spiral(x, y)
            const newLayout = new Layout({ data })
            await newLayout.save()
            res.status(201).json({ layoutId: newLayout._id })
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getAll = async (req, res, next) => {
    try {
        const layouts = await Layout.find()
        res.status(200).json(layouts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getValueOfLayout = async (req, res, next) => {
    try {
        const { x, y } = req.body

        const layout = await Layout.findById(req.body.layoutId)

        if(!layout) return res.status(404).json({ error: 'Layout not found.' })

        const value = layout.data[y][x]

        res.status(200).json({ value })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    create,
    getAll,
    getValueOfLayout
}