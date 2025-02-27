import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Player} from '../player/player';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl = 'http://localhost:8080/players';
  private logoutUrl = this.baseUrl + '/logout';
  private currentPlayerUrl = this.baseUrl + '/current';

  constructor(private http: HttpClient) { }

  getCurrentPlayer() {
    return this.http.get<Player>(this.currentPlayerUrl, {withCredentials: true})
      .pipe(
        catchError(this.handleError)
      );
  }

  login(name: string) {
    return this.http.post<Player>(this.baseUrl, name, {withCredentials: true})
      .pipe(
        catchError(this.handleError)
      );
  }

  logout() {
    return this.http.post<Player>(this.logoutUrl, {}, {withCredentials: true})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
