const mongoose = require('mongoose')

const employerSchema = mongoose.Schema({
    name: {
        required:true,
        type:String
    },
    last_name:{
        required: true,
        type:String
    },
    cellphone: {
        required: true,
        type: String
    },
    social_id:{
        required:true,
        type:Number
    },
    publication_date:{
        type: String
    }
})

module.exports = mongoose.model('Data', employerSchema)