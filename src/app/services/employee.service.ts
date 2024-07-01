import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];
  readonly URL_API = 'https://deploybk.vercel.app/api/employees';

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
    this.employees = [];
   }

  getEmployees() {
    return this.http.get(this.URL_API);
  }

  postEmployee(Employee: Employee) {
    return this.http.post(this.URL_API, Employee);
  }

  putEmployee(Employee: Employee) {
    return this.http.put(this.URL_API + `/${Employee._id}`, Employee);
  }

  deleteEmployee(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
