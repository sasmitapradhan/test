import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { products } from './mock_products';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent  {

  selectedProduct: Product;
  goBack(): void {
    this.location.back();
  // tslint:disable-next-line:semicolon
  };
  constructor(private activatedRoute: ActivatedRoute, private location: Location) {
    this.selectedProduct = new Product(1, "GH50", "", "", 2, "", 2, "", 2);
    this.activatedRoute.params.subscribe((params: Params) => {
      // tslint:disable-next-line:prefer-const
      let productId = params['id'];
      // tslint:disable-next-line:comment-format
      //this.selectedProduct.name = productId;
    });
   }
}
