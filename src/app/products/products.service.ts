import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Product, ProductAPIList } from './products.interfaces';

const PRODUCT_API = 'https://codingfactory.ddns.net/api/product'

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<ProductAPIList>(`${PRODUCT_API}/findall`).pipe(delay(1000))
  }

  insertProduct(product: Product) {
    return this.http.post<ProductAPIList>(`${PRODUCT_API}/create`, product)
  }
}

