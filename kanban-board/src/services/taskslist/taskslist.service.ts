import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) {}

  fetchTasks(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response:any) => {
        const tasksWithStatus = response.todos.map((task:any) => {
          const statuses = ['To Do', 'Ready', 'In Progress', 'Ready for Testing', 'Done'];
          const randomIndex = Math.floor(Math.random() * statuses.length);
          task.status = statuses[randomIndex];
          return task;
        });

        return {todos: tasksWithStatus };
      })
    );
  }
}
