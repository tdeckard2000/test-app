import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})

export class ChildComponentComponent implements OnInit {
  constructor() { }

  @Output() newHeaderName: EventEmitter<string> = new EventEmitter();
  textInput:string = "";

  onChangeHeader(){
    this.newHeaderName.emit(this.textInput);
  };

  ngOnInit(): void {
  }

}
