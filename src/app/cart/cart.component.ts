import {  Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private productsService : ProductsService) { }
  products : any = [];
  cartItems : any = [];
  cartTotal = 0;
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.cartItems = this.productsService.getCartItems();
    this.cartItems.forEach((item: { cost: any; }) => {
      this.cartTotal+=Number(item.cost);
    });
  }
  remove(prod: { modal: any; }){
    this.cartItems.forEach((item: { modal: any; },index: any) => {
      if(item.modal == prod.modal){
        this.cartItems.splice(index,1)
      } 
    });
    this.productsService.changeStatus(prod);
  }
  addQuantity(product: { modal: any; }){
    debugger;
    this.cartItems.forEach((item: { modal: any; quantity: number; }) => {
      if(item.modal === product.modal){
        item.quantity = item.quantity+1;
      }
    });
  }
  removeQuantity(product: { modal: any; }){
    this.cartItems.forEach((item: { modal: any; quantity: number; }) => {
      if(item.modal === product.modal){
        if(item.quantity == 1) this.remove(product)
        else item.quantity = item.quantity-1;
      }
    });
  }
}
