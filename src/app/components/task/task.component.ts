import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  @Input() public task: ITask | undefined;
  @Output() public delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  ngOnInit(): void {

  }

  deleteTask(): void {
    console.log('Se intenta eliminar =>', this.task)
    this.delete.emit(this.task) // Notificamos al componente superior la tarea a eliminar
  }
}
