import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-column-add-dialog',
  templateUrl: './column-add-dialog.component.html',
  styleUrls: ['./column-add-dialog.component.scss'],
})
export class ColumnAddDialogComponent {
  form: FormGroup;
  columnNames = ['To Do', 'Ready', 'In Progress', 'Ready for Testing', 'Done'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ColumnAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      columnName: '',
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
