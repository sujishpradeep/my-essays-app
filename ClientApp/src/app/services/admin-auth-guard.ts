import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    const admin =
      jwt_decode(this.authService.isLoggedin()).admin === "true" ? true : false;
    if (admin) return true;

    this.router.navigate(["/specifications"]);
    return false;
  }
}
