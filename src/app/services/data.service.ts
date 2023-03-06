import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Lotr } from '../models/lotr';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient, private log: LogService) {}

  getData():Observable<Lotr> {
    const LOTR_URL = 'https://the-one-api.dev/v2/movie';
    const COCKTAILS_URL =
      'https://www.thecocktaildb.cofm/api/json/v1/1/search.php?f=a';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer JElcr4yjrmQRMWmYaCnp',
      }),
    };

    return this.httpClient.get<Lotr>(LOTR_URL, httpOptions).pipe(
      catchError((error) => {
        this.log.logMessage(error);
        return throwError(() => new Error(error));
      })
    );
  }
}
