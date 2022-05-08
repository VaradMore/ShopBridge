import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Injectable()
export class AdministrationService {

  private productList: IProduct[] = [
    { name: 'T-Shirt', description: 'Cotton t-shirt', price: 600, quantity: 10 },
    { name: 'Cap', description: 'Cap Description', price: 300, quantity: 5 },
    { name: 'Jeans', description: 'Skinny Fit', price: 1000, quantity: 7 },
    { name: 'Shoes', description: 'Casusal Shoes', price: 2000, quantity: 2 },
    { name: 'Trousers', description: 'Formal Wear', price: 1200, quantity: 2 },
    { name: 'Shirt', description: 'Casusal Shirt', price: 800, quantity: 2 },
    { name: 'Sliders', description: 'Sliders', price: 700, quantity: 4 },
  ];
  constructor() { }

  getProductList(): IProduct[] {
   this.productList
    .forEach(i => {
      i.id = 'id' + Date.now() + Math.floor(Math.random() * 100);
    });
    return this.productList;
  }

}
