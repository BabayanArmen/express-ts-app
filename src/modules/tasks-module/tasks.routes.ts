import express from 'express'
import { TasksController } from './tasks.controller'

const tasksController = new TasksController()

export const tasksRoutes = express.Router()

// api/tasks
tasksRoutes.get('', tasksController.getTasks)

// api/tasks/:id
tasksRoutes.get('/:id', tasksController.getTask)

// api/tasks
tasksRoutes.post('/', tasksController.addTask)

// // api/tasks
tasksRoutes.put('/', tasksController.updateTask)

// // api/tasks/:id
tasksRoutes.delete('/:id', tasksController.removeTask)