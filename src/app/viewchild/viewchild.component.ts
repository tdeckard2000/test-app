import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  constructor() { }

  @ViewChild('myLocalRef', {static: false}) myLocalRef!: ElementRef;

  displayValue: string = "";

  onClick(){
    this.displayValue = this.myLocalRef.nativeElement.value;
  }

  ngOnInit(): void {
  }

}
