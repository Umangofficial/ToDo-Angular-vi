import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-active',
  templateUrl: './task-active.component.html',
  styleUrls: ['./task-active.component.css']
})
export class TaskActiveComponent implements OnInit {

  public tasks: any = []

  constructor(public TaskList: TaskService) { }

  ngOnInit(): void {
    this.TaskList.getTask().subscribe(response => {
      this.tasks = response
      console.log(this.tasks)
    });

  }
}


