import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(environment.getProducts)
      .pipe(map(response => response))
  }
}
