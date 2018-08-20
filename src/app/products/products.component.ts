import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { products } from './mock_products';
import { ProductService } from './product.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsList: Product[];
  // tslint:disable-next-line:no-trailing-whitespace
   constructor(private productService: ProductService) {
   }

   ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    // tslint:disable-next-line:no-shadowed-variable
    this.productService.getProducts().subscribe(productsList => this.productsList = productsList);
  }

}
