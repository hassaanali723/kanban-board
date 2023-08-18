import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/taskslist/taskslist.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  tasks: any[] = [];
  statuses: string[] = ['To Do', 'Ready', 'In Progress', 'Ready for Testing', 'Done'];
  taskGroups: { [key: string]: any[] } = {}; // Use an object to store grouped tasks

  constructor(private dialog: MatDialog, private taskService: TaskService) {}

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.fetchTasks().subscribe(
      (response) => {
        this.tasks = response.todos;
        this.statuses.forEach(status => {
          this.taskGroups[status] = this.tasks.filter(task => task.status === status);
        });

      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }

  onDrop(event: CdkDragDrop<any[]>, targetColumnId: string) {
    const task = event.item.data;
    const sourceColumnId = event.previousContainer.id;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      task.status = targetColumnId;
    }
  }

  openAddTaskDialog(column: string): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '300px',
      data: column
    });
  
    dialogRef.afterClosed().subscribe((newTaskTitle:any) => {
      console.log(newTaskTitle)
  })
    }

  getTaskStatusClass(status: string): string {
    
    switch (status) {
      case 'To Do':
        return 'task-card todo';
      case 'Ready':
        return 'task-card ready';
      case 'In Progress':
        return 'task-card in-progress';
      case 'Ready for Testing':
        return 'task-card testing';
      case 'Done':
        return 'task-card done';
      default:
        return 'task-card';
    }
  }

  

}
