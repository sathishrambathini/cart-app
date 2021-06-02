import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  emitCount = new Subject<boolean>();
  products = [
    {
      name : "Apple",
      modal : "6S",
      descripton : "apple 6s something...",
      cost : "40000",
      image_url : "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png",
      isAddedTOCart : false
    },
    {
      name : "Apple",
      modal : "8",
      descripton : "apple 6s something...",
      cost : "65000",
      image_url : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone8plus-spacegray?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1564083513793",
      isAddedTOCart : false
    },{
      name : "Apple",
      modal : "10",
      descripton : "apple 6s something...",
      cost : "90000",
      image_url : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-silver?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1579299535012",
      isAddedTOCart : false
    },{
      name : "Apple",
      modal : "11",
      descripton : "apple 6s something...",
      cost : "100000",
      image_url : "https://static.digit.in/default/9b801f10ae31faae1bc2777e55f45550922706aa.jpeg?tr=w-1200",
      isAddedTOCart : false
    }
  ];
  cartItems: any = [];
  constructor() { }
  getProducts(){
    return this.products;
  }
  addToCart(product: { [x: string]: number; modal: any; }){
    product["quantity"] = 1;
    this.products.forEach(item => {
      if(item.modal === product.modal){
        item.isAddedTOCart = true;
      }
    });
    this.cartItems.push(product);
    this.emitCount.next(this.cartItems.length);
  }
  getCartItems(){
    return this.cartItems;
  }
  changeStatus(prod: { modal: any; }){
    this.products.forEach((item)=>{
      if(item.modal == prod.modal){
        item.isAddedTOCart = false;
      }
    })
    this.emitCount.next(this.cartItems.length);
  }
  removeFromCart(prod: { modal: any; }){
    this.cartItems.forEach((item: { modal: any; },index: any) => {
      if(item.modal == prod.modal){
        this.cartItems.splice(index,1)
      } 
    });
    this.changeStatus(prod);
  }
}
