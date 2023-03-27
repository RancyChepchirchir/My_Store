import { Product } from './../../models/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of, switchMap, tap } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class ProductService {

  baseUrl = '/assets/data.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product[]>(`${this.baseUrl}`).pipe(
      switchMap((products: Product[]) => {
        return products.filter(product => {
          return product.id == id
        })
      }),
      tap(data => console.log(data))
    )
  }

  searchProducts(term: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}?name=${term}`);
  }
}
