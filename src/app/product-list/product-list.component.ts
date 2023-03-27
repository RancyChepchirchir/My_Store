import { ProductService } from '../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[] = [];
  contentLoaded = false;

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.contentLoaded = true;
    });
  }

}
