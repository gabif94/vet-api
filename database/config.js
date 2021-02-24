const mongoose = require('mongoose')
const password = 'Xd2HnHMLtymUCKTo'
const uri = `mongodb+srv://Gabi:${password}@cluster0.cbbig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/veterinary`
const dbConnection = async (req, res) => {
    try {
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true} )
        console.log('DB OK ')
    } catch (error) {
        console.error(error)
    }
}

module.exports = {dbConnection}