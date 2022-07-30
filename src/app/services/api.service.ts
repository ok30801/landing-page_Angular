import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, throwError} from 'rxjs';
import {IProduct} from '../interfaces/interfaces';
import {ErrorService} from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private errorHandler(error: HttpErrorResponse) {
  //   this.errorService.handle(error.message)
  //   return throwError(() => error.message)
  // }


  public allProducts: IProduct[] = []
  public allProducts$ = new BehaviorSubject<IProduct[]>([]);
  public loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  public getProducts() {
    this.loading$.next(true);
    this.http.get<IProduct[]>(environment.getProducts)
      .subscribe(data => {
        data.find(item => {
          if (item.discount) {
            item.oldPrice = item.price / ((100 - item.discount ) * 0.01)
          }
        })
        this.allProducts = data
        this.allProducts$.next(this.allProducts)
        this.loading$.next(false)
      })
  }
}
