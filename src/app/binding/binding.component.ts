import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  inputText='Test';
  maxLenght=5;
  colorClass='Color';
  logoUrl="";
  isDisable=true;
  constructor(){
    setTimeout(()=>{
      this.isDisable=false;
    },3000);
  }
  change(){
    this.inputText='Zmiana textuu i koloru';
    this.maxLenght=10;
    this.colorClass='color2';
    this.logoUrl='https://angular.io/assets/images/logos/angular/angular.png';
  }
}
