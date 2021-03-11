import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employeess',
  templateUrl: './list-employeess.component.html',
  styleUrls: ['./list-employeess.component.css']
})
export class ListEmployeessComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  SorryU() {
    alert("Sorry!!! Service Unavaiable Oly Developer Can Update ")
  }

  SorryD() {
    alert("Sorry!!! Service Unavaiable Oly Developer Can Delete ")
  }




  // //delete
  // deleteEmployee() {
  //   this.employeeService.deleteEmployee(this.employees);
  // }


}
