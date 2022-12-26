export interface IProduct{
  name?:string;
  id?:number;
}
import { Action } from "@ngrx/store";
  export const ADD_PRODUCT = "ADD_PRODUCT";
  export class AddProductAction implements Action{
    type = ADD_PRODUCT;
    constructor(public payload:string){}
  }
