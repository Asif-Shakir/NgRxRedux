import * as ProductActions from '../actions/product.action';
let initialState:any= {
  products:[]
};
export const productReducer = (state=initialState,action:ProductActions.AddProductAction) =>{
  switch(action.type){
    case ProductActions.ADD_PRODUCT:
      return{
        ...state,
        products:[...state.products,action.payload]
      }
  }
}
