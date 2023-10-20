import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
  inputText='';
  colorClass='color';
  isDisable=true;
  constructor(){}
  onFocus(){
    this.colorClass='color2';
  }
  onClick(event: MouseEvent){
    console.log(event);
  }
  onMouseMove(event: MouseEvent){
    console.log('x: '+event.clientX+', y: '+event.clientY);
  }
  onPaste(){
    this.inputText="Nie wklejaj, wpisz!";
  }
  change(){
    this.isDisable=false;
  }
}