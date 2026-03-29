import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {CreateTaskDTO, UpdateTaskDTO} from './dto/task.dto'

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

    @Delete(':id')
    removeTask(@Param('id') id: string) {
        return this.tasksSerivce.deleteTask( id );
    }

    @Patch(':id')
    updateTask(@Param("id") id: string, @Body() updatedFields: UpdateTaskDTO) {
        return this.tasksSerivce.updateTask(id, updatedFields);
    }

}
