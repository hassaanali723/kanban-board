import { Component, Inject, ViewEncapsulation  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss'],
})
export class AddTaskDialogComponent {
  newTaskTitle: string = '';
  form: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public column: string
  ) {

    this.form = this.fb.group({
      newTaskTitle: '',
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
