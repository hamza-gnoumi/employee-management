import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { EmployeeFormDialogComponent } from './employee-form-dialog/employee-form-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    DeleteConfirmDialogComponent,
    EmployeeFormDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatMenuModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule


  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
