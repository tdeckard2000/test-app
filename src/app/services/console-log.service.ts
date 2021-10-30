import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleLogService {

  constructor() { }

  logIt(logs:string){
    console.log("LogIt: " + logs)
  };

}
