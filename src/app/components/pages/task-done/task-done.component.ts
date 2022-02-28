import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {

  public tasks: any = []
  constructor(public TaskList: TaskService) { }

  // update(data: any) {
  //   const { id, status } = data
  //   console.log(id, status)
  //   this.TaskList.updateTask(data).subscribe(response => {
  //     console.log(response)
  //   })
  // }

  // deleteTask(data: any) {
  //   const { id } = data
  //   this.TaskList.deleteTask(data).subscribe(response => {
  //     console.log(response)
  //   })
  // }

  ngOnInit(): void {
    this.TaskList.getTaskData()
  }
}

