import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor() { }
  arr=[];
  Add(emp:any):void {
    this.arr.push(emp);
  }

  getData():any{
    return this.arr;
  }
}
