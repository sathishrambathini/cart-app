import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productsService : ProductsService) { }
  products : any = [];
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
  addtoCart(product: any){
    this.productsService.addToCart(product);
  }
  subtract(prod: any){
    this.productsService.removeFromCart(prod);
  }
  
}
