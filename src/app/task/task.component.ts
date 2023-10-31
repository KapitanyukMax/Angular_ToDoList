import { Component, Input } from '@angular/core';
import { ITask } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task?: ITask

  onCheck(): void {
    if (!this.task)
      return;

    if (this.task.status == "finished")
      this.task.status = "unfinished";
    else
      this.task.status = "finished";
  }


}
