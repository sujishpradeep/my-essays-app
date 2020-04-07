import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  signIn(credentials) {
    this.authService
      .login({ UserName: credentials.username, Password: credentials.password })
      .subscribe((response: any) => {
        if (response && response.jwt) {
          localStorage.setItem("token", response.jwt);
          this.router.navigate(["/specifications"]);
        } else this.invalidLogin = true;
      });
  }
}
