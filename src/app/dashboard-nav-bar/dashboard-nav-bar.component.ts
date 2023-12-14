import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav-bar',
  templateUrl: './dashboard-nav-bar.component.html',
  styleUrl: './dashboard-nav-bar.component.css'
})
export class DashboardNavBarComponent {

  constructor(private _router: Router) { }

  logOut() {
    this._router.navigate(["/", "login"])
  }
}
