const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.DB_HOST
mongoose.connect(uri, { useNewUrlParser: true })

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established sucessfully')
})

app.use(bodyParser.json())

const todosRouter = require('./routes/todos')
app.use('/todos', todosRouter)
app.use((err, req, res, next) => {
  console.log(err)
  next()
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
