import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-active',
  templateUrl: './task-active.component.html',
  styleUrls: ['./task-active.component.css']
})
export class TaskActiveComponent implements OnInit {

  constructor(public TaskList: TaskService) { }

  ngOnInit(): void {
    this.TaskList.getTaskData()
  }
}


