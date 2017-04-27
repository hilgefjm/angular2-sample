import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  moduleId: module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  products: IProduct[];
  imageWidth: number = 50;
  imageMargin: number = 2;
  isImageShown: boolean = false;
  listFilter: string = 'cart';

  constructor (private _productService: ProductService) {
  }

  ngOnInit (): void {
    this.products = this._productService.getProducts();
  }

  toggleImage (): void {
    this.isImageShown = !this.isImageShown;
  }

  onRatingClicked (message: string): void {
    console.log(message);
  }
}
