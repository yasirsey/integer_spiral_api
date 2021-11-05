const create = (req, res, next) => {
    try {

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getAll = (req, res, next) => {
    try {

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getValueOfLayout = (req, res, next) => {
    try {

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    create,
    getAll,
    getValueOfLayout
}