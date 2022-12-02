import { Component , OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  errorMessage = '';
  addEmployeeRequest: Employee = {
    id:'',
    name:'',
    email:'',
    contact: '',
    salary: '',
    department:'',

  }
  constructor(private employeeService: EmployeesService ,private router: Router) { }

  ngOnInit(): void {
  }
    addEmployee() {
      this.employeeService.addEmployee(this.addEmployeeRequest).
      subscribe({
         next: (employee) => {
          console.log(employee);
         },
         error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }

      });
  }
}
