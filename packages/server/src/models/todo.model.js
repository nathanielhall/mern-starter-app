const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo textfield is required']
  }
})

const Todo = mongoose.model('todo', TodoSchema)


module.exports = Todo
