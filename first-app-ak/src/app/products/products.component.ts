import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<string> = ['Pen', 'Pencil', 'Book', 'Marker'];

  constructor() { }

  addProduct(newProduct: string) {
    this.products = [ ...this.products, newProduct]
  }
  removeProduct(productName: string) {
    this.products = this.products.filter(name => name !== productName)
  }

  trackByProductName(index: number, product: string): string { return product; }

  ngOnInit(): void {
  }

}
