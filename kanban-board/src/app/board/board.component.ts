import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/taskslist/taskslist.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  tasks: any[] = [];
  statuses: string[] = ['To Do', 'Ready', 'In Progress', 'Ready for Testing', 'Done'];
  taskGroups: { [key: string]: any[] } = {}; // Use an object to store grouped tasks

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.fetchTasks().subscribe(
      (response) => {
        this.tasks = response.todos;

        // Group tasks by status
        this.statuses.forEach(status => {
          this.taskGroups[status] = this.tasks.filter(task => task.status === status);
        });

        console.log('Fetched tasks:', this.tasks);
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
}
