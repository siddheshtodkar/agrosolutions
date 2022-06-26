import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'
import { Router } from '@angular/router';

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
  constructor(private service: CommonService, private router: Router) { }

  login(){
    this.router.navigate(['main'])
  }

  ngOnInit(): void {
    this.service.getJSON('home').subscribe(data=>{
      this.homeJson=data
      console.log(this.homeJson)
    })
  }
}
