import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { routing } from 'app/app.routing';
import { EmployeeService } from 'app/employee.service';
import { EmployeeResolver } from 'app/employee.resolver';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeComponent,
    ShowEmployeeComponent,
    ShowEmployeesComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [EmployeeService, EmployeeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
