import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do';

  public tasks: any = []

  constructor(public TaskList: TaskService) { }

  ngOnInit(): void {
    this.TaskList.getTask().subscribe(response => {
      this.tasks = response
      console.log(this.tasks)
    });

  }

}
