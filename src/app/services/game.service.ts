import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {Game} from '../game/game';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = 'http://localhost:8080/games';

  constructor(private http: HttpClient) { }

  getGameList() {
    return this.http.get<Game[]>(this.url, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      );
  }

  createGame() {
    return this.http.post<Game>(this.url, {}, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      );
  }

  joinGame(id) {
    return this.http.post<Game>(this.url + '/' + id + '/join', {}, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      );
  }


  makeMove(id, position) {
    return this.http.post<Game>(this.url + '/' + id + '/move', position)
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
        `body was: ${error.error.toString()}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
