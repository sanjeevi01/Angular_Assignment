import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";


@Injectable()
export class EmployeeService {

    private listEmployees: Employee[] = [
    ];


    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    saveEmployee(employee: Employee) {
        this.listEmployees.push(employee);
    }

    deleteEmployee(id: number) {
        const i = this.listEmployees.findIndex(e => e.id === id);

        if (i !== -1) {
            this.listEmployees.slice(i, 1);
        }
    }

}