import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UserTask {
  taskTitle: string;
  taskDescription: string;
  taskStatus: string;
  subtasks: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl ="https://localhost:7052/api/UserTask/";

  constructor(private http: HttpClient) {}

  getData(): Observable<UserTask>
  {
    const allTasks = this.http.get<UserTask>(this.apiUrl);
    return allTasks;
  }
}
