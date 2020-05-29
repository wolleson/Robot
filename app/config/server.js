const port = 8080

const bodyParser =  require('body-parser')
const express = require('express')
const server =  express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true }))

const router = express.Router()
server.use(router)

server.listen(port, function(){
    console.log(`BACK-END is running on port ${port}`)
})

module.exports = server