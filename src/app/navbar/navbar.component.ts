import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public authenticatedUser = false
  
  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

}
