import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  openForm:boolean=false
  constructor() { }

  saveOccupation(){
    this.openForm=true
  }
  ngOnInit(): void {
  }

}
