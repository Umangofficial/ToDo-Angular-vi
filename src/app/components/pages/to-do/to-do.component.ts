import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  //public tasks: any = []
  constructor(public TaskList: TaskService) { }

  // addTask(data: any) {
  //   console.log(data)
  //   this.TaskList.postTask(data).subscribe(response => {
  //     this.TaskList.getTask().subscribe(response => {
  //       this.tasks = response
  //       console.log(this.tasks)
  //     })
  //   })
  //   this.TaskList.addTaskData(data)
  // }

  // update(data: any) {
  //   const { id, status } = data
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
