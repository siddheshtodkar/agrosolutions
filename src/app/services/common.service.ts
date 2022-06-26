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
  getWeather(lat:number, lon:number){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8e1880f460a20463565be25bc573bdc6`)
  }
}
