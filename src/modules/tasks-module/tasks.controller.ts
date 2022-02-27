import { Request, Response } from 'express';
import { DBRepository } from '../../DBAccessLayer/db.repository';
import { Task } from '../../models/db-models/task.model';

const dbRepo = new DBRepository()

export class TasksController {

    constructor() { }

    async getTasks(req: Request, res: Response) {
        try {
            let tasks: Task[] = await dbRepo.getAll('tasks')
            res.status(200).send(tasks)            
        } catch (error: any) {
            res.status(400).json(error.message)
        }
    }

    async getTask(req: Request, res: Response) {
        try {
            let id: number = parseInt(req.params.id);
            let task: Task = await dbRepo.getOneById('tasks', id)
            res.status(200).send(task)
        } catch (error: any) {
            res.status(400).json(error.message)
        }
    }

    async addTask(req: Request, res: Response) {
        try {
            let obj = req.body
            let newTaskId = await dbRepo.create('tasks', obj)
            obj.id = newTaskId
            res.status(200).send({"message":"object added successfully", data: obj})
        } catch (error: any) {
            res.status(400).json(error.message)
        }
    }

    async updateTask(req: Request, res: Response) {
        try {
            let obj = req.body
            await dbRepo.update('tasks', obj)
            res.status(200).send("object updated successfully")
        } catch (error: any) {
            res.status(400).json(error.message)
        }
    }

    async removeTask(req: Request, res: Response) {
        try {
            let id:number = parseInt(req.params.id) 
            await dbRepo.delete('tasks', id)
            res.status(200).send("object successfully removed")
        } catch (error: any) {
            res.status(400).json(error.message)
        }
    }
}