import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-lower',
  templateUrl: './lower.component.html',
  styleUrls: ['./lower.component.css']
})
export class LowerComponent implements OnInit {

  constructor() { }

  @Output() buttonClickEvent = new EventEmitter<string>()
  @Input() textFromParent:string = "old";

  textInput:string = "";

  onButtonClick(){
    this.buttonClickEvent.emit(this.textInput);
  };

  ngOnInit(): void {
  }

}
