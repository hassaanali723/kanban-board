import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnAddDialogComponent } from '../column-add-dialog/column-add-dialog.component';
import { ColumnService } from 'src/services/columnslist/columnslist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private columnService: ColumnService,public dialog: MatDialog) {}
  
  openAddColumnDialog(): void {
    const dialogRef = this.dialog.open(ColumnAddDialogComponent, {
      width: '300px', // Set the desired dialog width
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the selected column name here
        this.columnService.addColumn(result.columnName);
        // Add the new column to your board, e.g., this.columns.push(columnName);
      }
    });
  }


}
