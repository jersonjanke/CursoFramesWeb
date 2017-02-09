const restful = require('node-restful')
const mongoose = restful.mongoose

const loginSchema = new mongoose.Schema({    
    name: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = restful.model('Login', loginSchema)