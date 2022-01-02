import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo textfield is required']
  }
})

export const Todo = mongoose.model('todo', TodoSchema)
