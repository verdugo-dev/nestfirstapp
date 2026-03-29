import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {CreateTaskDTO} from './dto/task.dto'

@Controller('tasks')
export class TasksController {

    constructor(private tasksSerivce: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksSerivce.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDTO) {
        return this.tasksSerivce.createTask(newTask.title, newTask.description);
    }

}
