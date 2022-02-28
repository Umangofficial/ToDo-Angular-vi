import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { taskTodo } from 'src/assets/taskModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private getUrl: string = environment.taskGetUrl
  private postUrl: string = environment.taskPostUrl
  private updateUrl: string = environment.taskUpdateUrl
  private deleteUrl: string = environment.taskDeleteUrl
  public tasks: any = []

  constructor(private http: HttpClient) { }

  addTaskData(data: any) {
    this.postTask(data).subscribe(res => {
      this.getTask().subscribe(res => {
        this.tasks = res
      })
    })
  }

  updateTaskData(data: any) {
    this.updateTask(data).subscribe(res => {
      this.getTask().subscribe(res => {
        this.tasks = res
      })
    })
  }

  deleteTaskData(data: any) {
    this.deleteTask(data).subscribe(res => {
      this.getTask().subscribe(res => {
        this.tasks = res
      })
    })
  }

  getTaskData() {
    this.getTask().subscribe(res => {
      this.tasks = res
    })
  }

  getTask(): Observable<taskTodo[]> {
    return this.http.get<taskTodo[]>(this.getUrl)
  }
  postTask(data: any) {
    return this.http.post(this.postUrl, data, { responseType: "text" })
  }
  updateTask(data: any) {
    return this.http.post(this.updateUrl, data, { responseType: "text" })
  }
  deleteTask(data: any) {
    return this.http.post(this.deleteUrl, data, { responseType: "text" })
  }
}
