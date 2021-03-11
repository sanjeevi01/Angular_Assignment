import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;
import { DashBoardEmployeeComponent } from './employees/dash-board-employee/dash-board-employee.component';
import { EmployeeService } from './employees/employee.service';
import { DateComponent } from './date/date.component';
import { CreateEmployeesComponent } from './employees/create-employees/create-employees.component';
import { ListEmployeessComponent } from './employees/list-employeess/list-employeess.component';
import { EmpIdPipe } from './employees/emp-id.pipe';


const appRoutes: Routes = [
  { path: 'list', component: ListEmployeessComponent },
  { path: 'create', component: CreateEmployeesComponent },
  { path: 'home', component: DashBoardEmployeeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeessComponent,
    DashBoardEmployeeComponent,
    DateComponent,
    CreateEmployeesComponent,
    EmpIdPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
