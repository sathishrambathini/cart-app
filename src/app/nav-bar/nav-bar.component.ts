import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private productService : ProductsService) { }
  count : any = 0;
  ngOnInit(): void {
    this.productService.emitCount.subscribe((count)=>{
      this.count = count;
    });
  }

}
