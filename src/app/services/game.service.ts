import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Game} from '../game/game';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = 'http://localhost:8080/game';

  constructor(  private http: HttpClient
  ) { }

  createGame() {
    return this.http.post<Game>(this.url, {})
      .pipe(
        catchError(this.handleError)
      );
  }

  makeMove(position) {
    return this.http.post<Game>(this.url + '/1/move', position)
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
  };
}
