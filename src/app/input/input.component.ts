import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input('taskProp')
  tasks: string[] = [];
  @Output()
  eventTask=new EventEmitter<string>();

  constructor(){
  }
  ngOnInit(){}
  select(task: string){
    this.eventTask.emit(task);
  }
}