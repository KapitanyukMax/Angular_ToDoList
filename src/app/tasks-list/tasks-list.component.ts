import { Component } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { ITask } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  tasks = TASKS;
  selectedTask?: ITask;

  onSelect(task?: ITask): void {
    this.selectedTask = task;
  }

  onCheck(task?: ITask): void {
    if (!task)
      return;

    if (task.status == "finished")
      task.status = "unfinished";
    else
      task.status = "finished";
  }

  onRemove(task?: ITask) {
    if (task)
      TASKS.splice(TASKS.indexOf(task), 1);
  }
}
