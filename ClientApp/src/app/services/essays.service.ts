import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { BadInput } from "../common/bad-input";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";

@Injectable({
  providedIn: "root"
})
export class EssaysService {
  constructor(
    @Inject("BASE_URL") private url: string,
    private http: HttpClient
  ) {}

  getAll() {
    return this.http.get(this.url + "api/SampleData/EssayDetails");
  }

  update(essayDetail) {
    return this.http
      .put(this.url + "api/SampleData/EssayDetails", essayDetail)
      .pipe(
        catchError((error: Response) => {
          if (error.status === 400) {
            return throwError(new BadInput(error));
          } else {
            return throwError(new AppError(error));
          }
        })
      );
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
