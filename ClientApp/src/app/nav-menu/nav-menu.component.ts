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

  admin = false;

  reload = false;
  name = "";

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.name = jwt_decode(this.authService.isLoggedin()).name;
      this.admin =
        jwt_decode(this.authService.isLoggedin()).admin === "true"
          ? true
          : false;
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
    this.admin = false;
    this.router.navigate(["/"]);
  }
}
