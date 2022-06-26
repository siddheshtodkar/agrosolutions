import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service'
@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  latitude: number = 0
  longitude: number = 0
  weather:any
  isWeather:boolean=false
  constructor(private service: CommonService) { }
  getCurrentLocation() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getWeather()
      });
  }
  getWeather(){
    this.service.getWeather(this.latitude,this.longitude).subscribe(data => {
      console.log(data)
      this.weather=data
      this.weather.main.temp-=272.15
      this.weather.main.feels_like-=272.15
      this.weather.main.temp_min-=272.15
      this.weather.main.temp_max-=272.15
      this.isWeather=true
    })
  }
  ngOnInit(): void {
    this.getCurrentLocation()
  }
}
