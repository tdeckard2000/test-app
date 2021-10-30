import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  employeeName = ""
  statusSelection:string = "test";

  constructor(private dataService: DataService) { }

  onSubmit(){
    console.log(this.statusSelection, this.employeeName)
    this.dataService.addUser(this.employeeName, this.statusSelection);
  }

  ngOnInit(): void {
  }

}
