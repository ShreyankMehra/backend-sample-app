const express = require('express')
require("dotenv").config()
const app = express()
const port = 3000
data1=    [{"menu": {  
    "id": "file",  
    "value": "File",  
    "popup": {  
      "menuitem": [  
        {"value": "New", "onclick": "CreateDoc()"},  
        {"value": "Open", "onclick": "OpenDoc()"},  
        {"value": "Save", "onclick": "SaveDoc()"}  
      ]  
    }  
  }} ] 
app.get('/', (req, res) => {
  res.send('Hello World!')
})                       
app.get('/home', (req, res) => {
  res.send('<h1>This is the home page!!</h1>')
}) 
app.get('/json', (req, res) => {
  res.json(data1)
}) 


  app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`)
})
