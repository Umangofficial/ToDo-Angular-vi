import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-active',
  templateUrl: './task-active.component.html',
  styleUrls: ['./task-active.component.css']
})
export class TaskActiveComponent implements OnInit {

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
  //   console.log(id)
  //   this.TaskList.deleteTask(data).subscribe(response => {
  //     console.log(response)
  //   })

  // }

  ngOnInit(): void {
    this.TaskList.getTaskData()
  }
}


