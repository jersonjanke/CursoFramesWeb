const _ = require('lodash')
const Login = require('./login')

Login.methods(['get', 'post', 'put', 'delete'])
Login.updateOptions({new: true, runValidators: true}) // Atualiza valor no put

Login.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next){
    const bundle = res.locals.bundle

    if(bundle.errors){
        var errors = parseErros(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErros(nodeRestfulErrors){
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

module.exports = Login