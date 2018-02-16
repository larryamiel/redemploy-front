import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'app/employee.interface';
import { EmployeeService } from 'app/employee.service';
import { Response } from '@angular/http';
import { error } from 'util';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css'],
})
export class ShowEmployeesComponent implements OnInit {

  employees: Employee[];
  success: boolean;
  filter: string;

  constructor(private employeeService: EmployeeService, private router: Router) { 

    this.employeeService.getEmployees()
    .subscribe(
      (employees: Employee[]) => this.employees = employees,
      (error: Response) => console.log(error)
    );

    setInterval(()=>{ 
      if(this.success){
        setTimeout(()=>{ this.success = false }, 3000)
      }
    }, 100);

  }

  ngOnInit() {
  }

  onDelete(id: number) {
    this.employeeService.deleteEmployee(id)
    .subscribe(
      () => { this.success = true; console.log('Quote Deleted'); location.reload(); }
    );
  }

}
