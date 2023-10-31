import { Component } from '@angular/core';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  tasks = TASKS
}
