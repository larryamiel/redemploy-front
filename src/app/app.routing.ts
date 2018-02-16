import { Routes } from "@angular/router";
import { ShowEmployeesComponent } from "app/show-employees/show-employees.component";
import { NewEmployeeComponent } from "app/new-employee/new-employee.component";
import { RouterModule } from "@angular/router/src/router_module";
import { APP_BASE_HREF } from "@angular/common";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { ShowEmployeeComponent } from "app/show-employee/show-employee.component";
import { EmployeeResolver } from "app/employee.resolver";

const APP_ROUTES: Routes = [
    { path: '', component: ShowEmployeesComponent },
    { path: 'add', component: NewEmployeeComponent },
    { path: 'show/:id', component: ShowEmployeeComponent, resolve: { employee: EmployeeResolver } }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);