const express = require("express")
const pjson = require("./package.json")


// Application Server || Initialize
// =================================================================================================
// =================================================================================================
const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.env = require("dotenv").config().parsed


// Application Server || CORS Support
// =================================================================================================
// =================================================================================================
server.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  response.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization")
  next()
})


// Server Structure || Routes & APIs
// =================================================================================================
// =================================================================================================
server.get('/', (req, res) => {
  res.send('Welcome to J-Server!')
})

server.get('/name', (req, res) => {
  res.send('Vercjames')
})
server.get('/version', (req, res) => {
  let payload = {}
  payload.version = pjson.version
  res.status(200).json(payload)
})


// Server Structure || Initialize Server
// =================================================================================================
// =================================================================================================
;(async () => {
  server.listen({ port: server.env.port }, async () => {
    console.log(`Initialization-Server: http://localhost:${server.env.port}`)
  })
})()


