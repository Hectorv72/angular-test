import { Component } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  public tasks: Array<ITask> = [
    { title: 'Task1', level: Levels.Info, completed: false },
    { title: 'Task2', level: Levels.Info, completed: true },
    { title: 'Task3', level: Levels.Urgent, completed: false },
  ]

  public deleteTask(task: ITask) {
    // Se elimina la tarea seleccionada
    console.log(task)
  }

}
