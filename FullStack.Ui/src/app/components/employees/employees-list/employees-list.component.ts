import { Component, ComponentFactory, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
//import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
   employees  : Employee[] = [];
   constructor(private employeesServices : EmployeesService) { }   

  ngOnInit(): void {

    this.employeesServices.getAllEmployees()
    .subscribe({
      next: (employees ) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response)
      }
    })


    }
    
  }

