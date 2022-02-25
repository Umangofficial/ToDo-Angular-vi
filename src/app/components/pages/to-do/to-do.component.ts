import { Component, OnInit } from '@angular/core';
import { taskTodo } from 'src/assets/taskModel';
import taskData from './../../../../assets/task.json'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {


  tasks: taskTodo[] = taskData

  addTask(item: string) {
    console.log(item)
    taskData.push({ task: item })
  }


  constructor() { }

  ngOnInit(): void {
    console.log(taskData)
  }

}
