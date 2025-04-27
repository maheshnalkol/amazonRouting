import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL = environment.baseurl;
  PRODUCT_URL = `${this.BASE_URL}/products`;

  constructor(private _http: HttpClient) {}

  fetchAllPRoduct(): Observable<Iproduct[]> {
    return this._http.get<Iproduct[]>(this.PRODUCT_URL);
  }

  getObj(prodId: string): Observable<Iproduct> {
    return this._http.get<Iproduct>(`${this.PRODUCT_URL}/${prodId}`);
  }
}
