import { Todo } from '../models'
import express, { Request, Response, NextFunction } from 'express'

export const todoController = express.Router()

// GET all todos
todoController.get('/', (req: Request, res: Response, next: NextFunction) => {
  Todo.find()
    .then((data) => res.json(data))
    .catch(next)
})

// Create or Update a TODO
todoController.post('/', (req: Request, res: Response, next: NextFunction) => {
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
todoController.delete(
  '/:id',
  (req: Request, res: Response, next: NextFunction) => {
    Todo.findOneAndDelete({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch(next)
  }
)
