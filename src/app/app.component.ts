import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'BurgerApp';
  title2 = 'VegeBurgerApp';
  title3 = 'Dyrektywa ngFor';
  usersList = ['Dorota', 'Błażej', 'Sebastian', 'Marta', 'Piotr', 'Grzegorz', 'Daniel'];

  
  taskList=['Sprzątanie kuwety', 'Gotowanie', 'Nauka angulara'];

  myFunction(event: Event){
    console.log(event);
  }
}
