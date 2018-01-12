const express = require('express')
const app = express()
const OAuth2Server = require('oauth2-server')
app.get('/', function (req, res) {
  const oauth = new OAuth2Server({
    model: require('./model')
  })
})

app.listen(3030, function() {
  console.log('Go')
})
