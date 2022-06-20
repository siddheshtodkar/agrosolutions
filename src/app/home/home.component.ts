import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:String=''
  password:string=''
  register:boolean=false
  homeJson:any=[]
  constructor(private service: CommonService) { }

  login(){

  }

  ngOnInit(): void {
    this.service.getJSON('home').subscribe(data=>{
      this.homeJson=data
      console.log(this.homeJson)
    })
  }
}
