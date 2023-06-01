import { Employee } from './../model/employee';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { EmployeeFormDialogComponent } from '../employee-form-dialog/employee-form-dialog.component';
import { takeUntil } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Unsub } from '../unsub';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent extends Unsub implements OnInit {
  dataSource;
  filterValue;


  constructor(private employeeService: EmployeeService, private dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.employeeService.getAllEmployees().pipe(takeUntil(this.unsbscribe)).subscribe(emp => {
      this.dataSource = new MatTableDataSource(emp);
      console.log(this.dataSource);
      this.dataSource.filterPredicate = function (record, filter) {
        return record.firstName.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
      }
    });
  }
  private getEmployees() {
    this.dataSource = this.employeeService.getAllEmployees();
    this.filterValue = "";

  }
  displayedColumns: string[] = ['firstName', 'lastName', 'emailId', 'actions'];

  applyFilter() {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }






  //Create Employee Section
  OpenDialogCreate() {
    const dialogRef = this.dialog.open(EmployeeFormDialogComponent, { data: { typeOperation: "Create" } });
    dialogRef.afterClosed().subscribe(rslt => {
      if (rslt) this.saveEmployee(rslt);
    });
  }

  saveEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee).subscribe(() => { this.getEmployees(); });
  }



  //Update Employee Section
  OpenDialogUpdate(id: number) {
    const dialogRef = this.dialog.open(EmployeeFormDialogComponent, { data: { typeOperation: "Update", id: id } });
    dialogRef.afterClosed().subscribe(rslt => {
      if (rslt) this.updateEmployee(id, rslt);
    });
  }
  updateEmployee(id: number, employee) {
    this.employeeService.updateEmployee(id, employee).subscribe(data => {
      this.getEmployees();

    });
  }

  // Delete Section
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }
  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(rslt => {
      if (rslt)
        this.deleteEmployee(id);
    });

  }

  // Employee Details
  employeeDetails(id: number) {
    const dialogRef = this.dialog.open(EmployeeFormDialogComponent, { data: { typeOperation: "details", id: id } });
  }


}

