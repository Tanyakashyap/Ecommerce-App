import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(user) {
    if (user == "admin") {
      if (sessionStorage.getItem("role") == "admin") {
        this.router.navigateByUrl("/admin/dashboard")
      } else {
        this.router.navigateByUrl("/admin/login")
      }
    } else if (user == "seller") {
      if (sessionStorage.getItem("role") == "seller") {
        this.router.navigateByUrl("/seller/dashboard")
      } else {
        this.router.navigateByUrl("/seller/sign-in")
      }
    } else if (user == "buyer") {
      if (sessionStorage.getItem("role") == "buyer") {
        this.router.navigateByUrl("/buyer/dashboard")
      } else {
        this.router.navigateByUrl("/buyer/sign-in")
      }
    }
  }

}
