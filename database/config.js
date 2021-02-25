const mongoose = require('mongoose')
const dbConnection = async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true} )
        console.log('DB OK ')
    } catch (error) {
        console.error(error)
    }
}

module.exports = {dbConnection}