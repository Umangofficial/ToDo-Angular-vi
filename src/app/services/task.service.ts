import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private getUrl: string = environment.taskGetUrl
  private postUrl: string = environment.taskPostUrl
  private updateUrl: string = environment.taskUpdateUrl

  constructor(private http: HttpClient) { }

  getTask() {
    return this.http.get(this.getUrl)
  }
  postTask(data: any) {
    return this.http.post(this.postUrl, data, { responseType: "text" })
  }
  updateTask(data: any) {
    return this.http.post(this.updateUrl, data, { responseType: "text" })
  }
}
