import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

import * as jwt_decode from "jwt-decode";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.css"],
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  name = "";

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.name = jwt_decode(this.authService.isLoggedin()).name;
    }
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onLogOut() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
