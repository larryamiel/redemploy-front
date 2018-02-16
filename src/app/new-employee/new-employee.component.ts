import { Component, OnInit } from '@angular/core';
import { Employee } from 'app/employee.interface';
import { EmployeeService } from 'app/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { error } from 'util';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  employee: Employee
  success: boolean
  error: boolean

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { 
    setInterval(()=>{ 
      if(this.success){
        setTimeout(()=>{ this.success = false }, 3000)
      }
      if(this.error){
        setTimeout(()=>{ this.error = false }, 3000)
      }
    }, 100);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.employeeService.addEmployee(form.value.fullname, form.value.title, form.value.birthdate, form.value.address, form.value.gender)
    .subscribe(
      (employee: Employee) => { 
        this.success = true;
        location.reload();
      },
      (error: Response) => this.error = true
    );
  }

}
