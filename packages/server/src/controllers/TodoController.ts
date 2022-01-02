// import { BaseController, Result } from './BaseController'

//   public GetTodos: () => Result<Todo> = (id) => {
//     return Result.ok()

import { Todo } from '../models'
import express, { Request, Response } from 'express'

export const router = express.Router()

// GET all todos
router.get('/', (req: Request, res: Response, next) => {
  Todo.find()
    .then((data) => res.json(data))
    .catch(next)
})

// Create or Update a TODO
router.post('/', (req: Request, res: Response, next) => {
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
router.delete('/:id', (req: Request, res: Response, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next)
})
