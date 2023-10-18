import { Component } from '@angular/core';

@Component({
  selector: 'app-vegeburger',
  templateUrl: './vegeburger.component.html',
  styleUrls: ['./vegeburger.component.css']
})
export class VegeburgerComponent {
  title='Angular';
  days=['Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Sobota',
  'Niedziela'];
  isVisible=true;
  isHidden=false;
  show(){
    this.isVisible=!this.isVisible;
  }
  hidden(){
    this.isHidden=!this.isHidden;
  }
}