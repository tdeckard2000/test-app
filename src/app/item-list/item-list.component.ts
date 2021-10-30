import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private dataService:DataService) { }

  itemList:Array<{name: string, status: string}> = this.dataService.userInfo;

  deleteUser(arrayIndex: number){
    this.dataService.deleteUser(arrayIndex);
  }

  ngOnInit(): void {
  }

}
