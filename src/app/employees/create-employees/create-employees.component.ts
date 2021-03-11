
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  employee: Employee = {
    id: null,
    name: null,
    phoneNumber: null,
    department: "false",
    salary: null,
  }

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  // to validate department selected or not

  department_Topic: string[] = ["Java", "Angular", "Web Basics", "SFDC"];
  departmentHasError: boolean = true;

  validateDepartment(value: string): void {
    if (value === "false" || value === null) {
      this.departmentHasError = true;
    } else {
      this.departmentHasError = false;
    }
  }

  // end


  //save employee

  saveEmployee(userForm: NgForm): void {

    this.employeeService.saveEmployee(this.employee);
    this.router.navigate(['list']);

  }

}
