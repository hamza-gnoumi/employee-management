import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';
import { Employee } from './../model/employee';
import { Component, Inject, Input } from '@angular/core';
import { Unsub } from '../unsub';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-employee-form-dialog',
  templateUrl: './employee-form-dialog.component.html',
  styleUrls: ['./employee-form-dialog.component.css']
})
export class EmployeeFormDialogComponent extends Unsub {
  employee: Employee = new Employee();
  id: number;


  constructor(private employeeService: EmployeeService, @Inject(MAT_DIALOG_DATA) public data: {}) {
    super();
  }


  ngOnInit(): void {
    if (this.data['typeOperation'] === "Update" || this.data['typeOperation'] === "details") {
      this.id = this.data['id'];
      this.employeeService.getEmployeeById(this.id).pipe(takeUntil(this.unsbscribe)).subscribe(emp => { this.employee = emp; });
    }
  }
}
