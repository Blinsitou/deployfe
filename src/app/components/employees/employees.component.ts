import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {}

  addEmployee(form?: NgForm) {
    this.employeeService.postEmployee(form?.value).subscribe(res => {
      this.resetForm(form);
      M.toast({ html: 'Guardado correctamente' });
      
    })
  }
    resetForm(form?: NgForm) {
      if (form) {
        form.reset();
        this.employeeService.selectedEmployee = new Employee();
    
  }
 }
}
