import { Injectable } from '@angular/core';
import * as ProductList from 'src/assets/data-static/products.json';
import * as _ from 'lodash';
import { IProduct } from 'src/app/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  serviceGetAllProduct() {
    const list: Array<IProduct> = ProductList;

    return Promise.resolve(list);
  }
}
