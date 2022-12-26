import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from './actions/product.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgRxRedux';
  product:string = '';
  productList:any = [];
  constructor(private store:Store<any>){

  }
  ngOnInit(){
    this.store.select('productList').subscribe(res =>{
      this.productList = res?.products;
      console.log(this.productList);
    })
  }
  addProductBtn(){
    this.store.dispatch(new ProductActions.AddProductAction(this.product));
    this.product = '';
  }
}
