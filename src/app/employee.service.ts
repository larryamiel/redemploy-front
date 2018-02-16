import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx'
import { Observable } from "rxjs/Observable";   

@Injectable()
export class EmployeeService {
    constructor(private http: Http) {

    }

    getEmployees():Observable<any> {
        return this.http.get('http://localhost:80/redemploy/public/api/employees')
        .map(
            (response: Response) => {
                return response.json().employees;
            }
        );
    }

    getEmployee(id: number):Observable<any> {
        return this.http.get('http://localhost:80/redemploy/public/api/employee/' + id)
        .map(
            (response: Response) => {
                return response.json().employee;
            }
        );
    }

    addEmployee(fullname: string, title: string, birthdate: string, address: string, gender: string) {
        const body = JSON.stringify({fullname: fullname, title: title, birthdate: birthdate, address: address, gender: gender});
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:80/redemploy/public/api/employee', body, {headers: headers})
        .map(
            (response: Response) => response.json().employee
        );
    }

    updateEmployee(id: number, fullname: string, title: string, birthdate: string, address: string, gender: string) {
        const body = JSON.stringify({fullname: fullname, title: title, birthdate: birthdate, address: address, gender: gender});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://localhost:80/redemploy/public/api/employee/' + id, body, {headers: headers})
        .map(
            (response: Response) => response.json().employee
        );
    }

    deleteEmployee(id: number) {
        return this.http.delete('http://localhost:80/redemploy/public/api/employee/' + id);
    }
}