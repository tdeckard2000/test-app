import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.css']
})
export class UpperComponent implements OnInit {

  constructor() { }

  parentTextValue:string = "old"
  theValue = 'old';

  onChangeValue(newVal:string){
    this.theValue = newVal;
    console.log("here")
  };

  ngOnInit(): void {
  }

}
