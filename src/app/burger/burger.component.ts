import { Component } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {
  inputText: string = 'Pole tekstowe';
  inputText2Way: string = ''; // Inicjalizacja inputText2Way jako pustego ciągu znaków
  button: boolean = true;
  showClick: string = '';

  click(event: MouseEvent): void {
    this.showClick = 'Przycisk aktywny!';
    this.button = false;
  }
}