// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  private columnsSubject = new BehaviorSubject<string[]>(['To Do', 'Ready', 'In Progress', 'Ready for Testing', 'Done']);
  columns$ = this.columnsSubject.asObservable();

  addColumn(columnName: string) {
    const currentColumns = this.columnsSubject.value;
    currentColumns.push(columnName);
    this.columnsSubject.next(currentColumns);
  }
}
