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

    updateTask() {}

    deleteTask() {}
}
