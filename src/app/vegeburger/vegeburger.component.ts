import { Component } from '@angular/core';

@Component({
  selector: 'app-vegeburger',
  templateUrl: './vegeburger.component.html',
  styleUrls: ['./vegeburger.component.css']
})
export class VegeburgerComponent {
  days=['Poniedziałek','Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  dogs=new Array<Dog>();

  constructor(){
    this.dogs.push(new Dog('Reksio', 4), new Dog('Łatek', 10), new Dog('Bruno', 9));
  }
}
class Dog{
  constructor(public name: string, public age: number){
  }
}