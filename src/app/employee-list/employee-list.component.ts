import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[];


  //employee service injected
  constructor(private employeeService: EmployeeService, private router:Router){}
  ngOnInit(){
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(
      data=>{
      this.employees = data;
    });
  }
  updateEmployee(id: number ){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(
      data=>{
        console.log(data);
        this.getEmployees();
      }
    );
  }
  
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
}












/*
 this.employees = [{
      "id":1000,
      "firstName": "Bala",
      "lastName": "Gu",
      "emailId":"bala@gmail.com"
    },
    {
      "id":1001,
      "firstName": "Samantha",
      "lastName": "Man",
      "emailId":"sam@gmail.com"
    },
    {
      "id":1002,
      "firstName": "Martha",
      "lastName": "Meriyam",
      "emailId":"martha.meriyam@gmail.com"
    }
  ];
*/
 