import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { JwtService } from './jwt.service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';

const { apiUrl } = environment;

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}

  private formatErrors(error: any) {
    return new ErrorObservable(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${apiUrl}${path}`, { params }).pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${apiUrl}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${apiUrl}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(`${apiUrl}${path}`).pipe(catchError(this.formatErrors));
  }
}
