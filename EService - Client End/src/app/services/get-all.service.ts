import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllService {

  constructor(private http:Http) { }

  USER: string = "abc";
  PASS: string = "def";

  getAllServices()
    {
      let url="http://localhost:8080/EService/webapi/myresource/services";
      console.log("final url = "+url);
      return this.http.get(url);
    }

  getByCity(city:string){
    let url="http://localhost:8080/EService/webapi/myresource/servicesCity/"+city;
      console.log("final url = "+url);
      return this.http.get(url);
  }

  getByCategory(category:string){
    let url="http://localhost:8080/EService/webapi/myresource/servicesCategory/"+category;
      console.log("final url = "+url);
      return this.http.get(url);
  }

  getByCombo(city:string,category:string){
    let url="http://localhost:8080/EService/webapi/myresource/servicesCombo/"+city+"/"+category;
    console.log("final url = "+url);
    return this.http.get(url);
  }

  searchServiceman(param:string){
    console.log(param);
    let url = "http://localhost:8080/EService/webapi/myresource/displayServices/"+param;
    return this.http.get(url);
  }

  getServiceman(param:string){
    console.log(param);
    let url = "http://localhost:8080/EService/webapi/myresource/displayServices/"+param;
    return this.http.get(url);
  }

  editService(serviceObj,param){
    console.log(param);
    let url = "http://localhost:8080/EService/webapi/myresource/edit/"+param;
    return this.http.put(url,serviceObj);
  }

  deleteService(param){
    let url = "http://localhost:8080/EService/webapi/myresource/delete/"+param;
    return this.http.delete(url);
  }
  
  justDial(){
    let url = "http://webhose.io/filterWebContent?token=8b1ef471-0738-4d09-9f2e-10dc4579180c&format=json&sort=crawled&q=site%3Ajustdial.com";
    return this.http.get(url);
  }

  getNewlyAdded(){
    let url="http://localhost:8080/EService/webapi/myresource/newlyAdded";
    return this.http.get(url);
  }

  getHighRated(){
    let url="http://localhost:8080/EService/webapi/myresource/highRated";
    return this.http.get(url);
  }

  checkAuth(user,pass){
    let url="http://localhost:8080/EService/webapi/myresource/admin/"+user+"/"+pass;
    let headers: Headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(user + ":" + pass)); 
        headers.append("Content-Type", "application/x-www-form-urlencoded");
    return this.http.post(url,{headers:Headers});
  }

}
