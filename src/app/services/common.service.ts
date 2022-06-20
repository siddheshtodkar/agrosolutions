import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) { }

  getJSON(file:string){
    let path:string='assets/json/'+file+'.json'
    return this.http.get(path)
  }
}
