import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConsoleLogService } from '../services/console-log.service';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  constructor( private logService: ConsoleLogService) { }

  @ViewChild('myLocalRef', {static: false}) myLocalRef!: ElementRef;

  displayValue: string = "";
  isChecked:boolean = true;
  textboxTwoValue: string = "Example";
  textboxThreeValue: string = "";

  onClick(){
    this.displayValue = this.myLocalRef.nativeElement.value;
  }

  ngOnInit(): void {
    this.logService.logIt("this is my log info.")
  }

}
