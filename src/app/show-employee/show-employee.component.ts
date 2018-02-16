import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'app/employee.interface';
import { EmployeeService } from 'app/employee.service';
import { Response } from '@angular/http';
import { error } from 'util';
import { setTimeout } from 'timers';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  employee: Employee;
  success: boolean;
  error: boolean;
  id: number;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
    route.data.subscribe(
      data => { this.employee = data['employee']; }
    );

    setInterval(()=>{ 
      if(this.success){
        setTimeout(()=>{ this.success = false }, 3000)
      }
      if(this.error){
        setTimeout(()=>{ this.error = false }, 3000)
      }
    }, 100);
  }

  ngOnInit() {  }

  onUpdate() {
    this.employeeService.updateEmployee(this.employee.id, this.employee.fullname, this.employee.title, this.employee.birthdate, this.employee.address, this.employee.gender)
    .subscribe(
      (employee: Employee) => { 
        this.employee = employee
        this.success = true;
        location.reload();
      },
      (error: Response) => this.error = true
    );
  }

}
