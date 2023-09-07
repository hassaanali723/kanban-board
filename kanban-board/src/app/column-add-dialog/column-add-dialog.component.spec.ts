import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnAddDialogComponent } from './column-add-dialog.component';

describe('ColumnAddDialogComponent', () => {
  let component: ColumnAddDialogComponent;
  let fixture: ComponentFixture<ColumnAddDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnAddDialogComponent]
    });
    fixture = TestBed.createComponent(ColumnAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
