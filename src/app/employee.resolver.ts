import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Employee } from "app/employee.interface";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { EmployeeService } from "app/employee.service";


@Injectable()
export class EmployeeResolver implements Resolve<Employee> {

    constructor(private employeeService: EmployeeService) {

    }

    resolve(route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): Observable<any> {
        
        return this.employeeService.getEmployee(route.params['id']);
    }
}