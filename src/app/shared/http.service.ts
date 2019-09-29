import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }
   
  
    changeProfile(value){
   return this.http.post('',value)
    }
    getProfile(){
     return this.http.get('')
    }
}