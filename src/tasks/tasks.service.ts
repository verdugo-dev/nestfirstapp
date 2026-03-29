import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import {v4} from 'uuid'

@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
            id: '1',
            title: 'first task',
            description: 'some task',
            status: TaskStatus.OPEN,
        }
    ];

    getAllTasks() {
        return this.tasks;
    }

    createTask(title: string, description: string) {
        const newTask = {
            id: v4(),
            title, 
            description,
            status: TaskStatus.OPEN
        }
        this.tasks.push(newTask);

        return newTask;
    }

    getTaskById(id: string): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }

    updateTask(id: string, updatedFields: any) {
        const task = this.getTaskById(id);
        const newTask = {...task, ...updatedFields}
        this.tasks = this.tasks.map(task => task.id === id ? newTask : task);
        return this.tasks;
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        return this.tasks;
    }
}
