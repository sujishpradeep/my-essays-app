import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadInput } from "../common/bad-input";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    @Inject("BASE_URL") private url: string,
    private http: HttpClient
  ) {}

  login(credentials) {
    return this.http.put(this.url + "api/SampleData/auth", credentials).pipe(
      catchError((error: Response) => {
        if (error.status === 400) {
          return throwError(new BadInput(error));
        } else {
          return throwError(new AppError(error));
        }
      })
    );
  }

  logout() {
    localStorage.removeItem("token");
  }

  isLoggedin() {
    return localStorage.getItem("token");
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new NotFoundError(error));
    } else if (error.status === 404) {
      return throwError(new NotFoundError(error));
    } else {
      return throwError(new AppError(error));
    }
  }
}
