const express = require('express')
const router = express.Router()
const Todo = require('../models/todo.model')

// GET all todos
router.get('/', (req, res, next) => {
  Todo.find()
    .then((data) => res.json(data))
    .catch(next)
})

// Create or Update a TODO
router.post('/', (req, res, next) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next)
  } else {
    res.json({
      error: 'The input field is empty'
    })
  }
})

// Delete TODO
router.delete('/:id', (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next)
})

module.exports = router
