import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-references',
  templateUrl: './local-references.component.html',
  styleUrls: ['./local-references.component.css']
})
export class LocalReferencesComponent implements OnInit {

  constructor() { }

  stringValue = "";

  onClick(inputText:any){
    console.log(inputText)
    this.stringValue = inputText;
  }

  ngOnInit(): void {
  }

}
