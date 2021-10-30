import { Injectable } from '@angular/core';

class User {
  'name': string;
  'status': string;

  constructor(name: string, status: string){
    this.name = name;
    this.status = status;
  };
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userInfo: Array<User> = [{name: 'Beethoven, L', status: 'inactive'}, {name: 'Trent D', status: 'active'}, {name: 'Santa C', status: 'hyperactive'}]

  addUser(name: string, status: string){
    const newUser = new User(name, status);
    this.userInfo.push(newUser);
  };

  deleteUser(arrayId: number){
    this.userInfo.splice(arrayId, 1);
  };

  constructor() { }
}
