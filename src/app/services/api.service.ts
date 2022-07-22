import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, delay, map, Observable, retry, throwError} from 'rxjs';
import {IProduct} from '../interfaces/interfaces';
import {ErrorService} from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.getProducts)
      .pipe(
        delay(1000),
        retry(2),
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
