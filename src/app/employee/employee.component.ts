import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  profession='programista';
  skill='Angular';
  constructor(){
  }
  inputProfession(event: Event){
    this.profession=(event.target as HTMLInputElement).value;
  }
  inputSkill(event: Event){
    this.skill=(event.target as HTMLInputElement).value;
  }
}
