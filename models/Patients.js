const {Schema, model} = require('mongoose')

const PatientSchema = Schema({
    patient: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required : true,
    },
    specie: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
    diagnosis: {
        type: String,
        required: true,
    },
    propietary: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    ts_create: {
        type: Date,
        default: Date.now,
    }
    
})

module.exports = model('patients', PatientSchema)

