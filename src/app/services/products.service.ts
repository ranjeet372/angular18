import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../models/product.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<product[]> {

    return this.http.get<product[]>(this.baseApiUrl + '/products');
  }

  addProduct(addProductRequest: product): Observable<product> {
    return this.http.post<product>(this.baseApiUrl + '/products', addProductRequest);
  }

  getProduct(id: string): Observable<product> {
    return this.http.get<product>(this.baseApiUrl + '/products/' + id);
  }
}
