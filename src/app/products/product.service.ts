import { Injectable } from '@angular/core';
import {Product} from '../product';
import { products } from './mock_products';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class ProductService {
// tslint:disable-next-line:eofline

getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(products);
  }
// tslint:disable-next-line:eofline
}