const express = require('express')
require("dotenv").config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})                       
app.get('/home', (req, res) => {
  res.send('<h1>This is the home page!!</h1>')
})                       
  app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${port}`)
})