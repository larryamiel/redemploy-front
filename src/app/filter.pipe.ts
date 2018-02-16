import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'app/employee.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any, term: any): any {
    // Check if Search Term is Undefined
    if (term === undefined) return employees;

    return employees.filter(function(employee: Employee){
      if(employee.fullname.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else if(employee.id.toString().toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else if(employee.title.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else if(employee.address.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else if(employee.birthdate.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else if(employee.gender.toLowerCase().includes(term.toLowerCase())){
        return true;
      }
      else {
        return false;
      }
    });
  }

}
