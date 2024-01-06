import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
constructor(){}
  seconds= new Date().getSeconds()
  
  time:number=0
ngOnInit(): void {
  this.time = 1
localStorage.getItem("test")
}

test():void {
  setInterval(()=> {
    this.seconds-- 
  },1000)
}
}
