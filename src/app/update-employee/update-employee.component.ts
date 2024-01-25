import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
  id:number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private route:ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    //get id from the route
    this.id = this.route.snapshot.params['id'];
    // we subscribe to getEmployeeId to return an observable 
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      console.log(data);
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.employee);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data=>{
      this.goToEmployeeList();
    })
  }
  //once user submit updated data by clicking the update employee button
  //the page has to route and go back to the list of employees
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}

