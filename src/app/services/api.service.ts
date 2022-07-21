import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {delay, map, Observable} from 'rxjs';
import {IProduct} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.getProducts)
      .pipe(
        delay(2000)
      )
  }
}
