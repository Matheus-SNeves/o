const express = require('express')
const routes = express.Router()

const clientes = require('./controller/clientesController')



routes.post('/clientes', clientes.create)
routes.get('/clientes', clientes.read)

module.exports = routes