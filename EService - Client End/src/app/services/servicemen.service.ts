import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServicemenService {

  constructor(private http:Http) { }

  allService:any;

  Add(jsonService:any) {
    alert("Service me agya");
    let url="http://localhost:8080/EService/webapi/myresource/add";
    return  this.http.post(url,jsonService);
  }
}
