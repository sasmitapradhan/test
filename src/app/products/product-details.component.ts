import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { products } from './mock_products';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from './product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct: Product;
  productsList: Product[];
  productId: string;
  goBack(): void {
    this.location.back();
  // tslint:disable-next-line:semicolon
  };
  constructor(private activatedRoute: ActivatedRoute, private location: Location , private productService: ProductService) {
    // tslint:disable-next-line:whitespace
    this.selectedProduct = new Product();
    this.activatedRoute.params.subscribe((params: Params) => {
      // tslint:disable-next-line:prefer-const
      this.productId = params['id'];

    });
   }
   ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    // tslint:disable-next-line:no-shadowed-variable
    this.productService.getProducts().subscribe(productsList => {
      this.productsList = productsList;
      this.productsList.forEach(product => {
        if (this.productId === product.productName) {
          this.selectedProduct = product;
        }
      });
    });
}
}
