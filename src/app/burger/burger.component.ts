import { Component } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {
  title='Angulara';
  pi=Math.PI;
  date=new Date();
  dog=Dog;/*new Dog('Perła', 12);
  showDog(){
    return "Mój piesio to "+this.dog.name+" i ma "+this.dog.age+" lata.";
  }*/
}
class Dog{
  constructor(public name: string, public age: number){
  }
}