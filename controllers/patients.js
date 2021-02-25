const Patient = require('../models/Patients')


const patients_single = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Patient.findById(id)
        res.json(data)
    } catch (error) {
        res.send(404)
        
    }
}

const patients_all = async (req, res) => {
    try {
       const data = await Patient.find()
       res.json(data)
    } catch (error) {
        res.sendstatus(500)
    }
    
}

module.exports = {patients_all, patients_single}