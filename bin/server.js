require('babel-register')
require("babel-polyfill")

const config = require('../config').default
const server = require('../server/main').default
const debug = require('debug')('app:bin:server')

const port = config.server_port
const host = config.server_host

server.listen(port)
debug(`Server is now running at ${host}:${port}.`)
