const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to database.'))
    .catch((error) => console.log(error))
}

module.exports = {
    connect
}