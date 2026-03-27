import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './tasks.model.js';
import { CardComponent } from "../../shared/card.component";
import { TasksService } from '../../task/tasks.service.js';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService)

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id)
  }
}
