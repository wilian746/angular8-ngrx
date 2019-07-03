import { ProductActionsTypes } from '../actions/product.action';
import { initialProductState, ProductState } from '../state/product.state';
import * as _ from 'lodash';

export function productStore(state: ProductState = initialProductState, action) {
  switch (action.type) {
    case ProductActionsTypes.SET_SELECTED_PRODUCT:
      return {
        ...state,
        products: state.products,
        selectedProduct: action.payload
      };
    case ProductActionsTypes.CREATE_PRODUCT:
      const productsToCreate = _.cloneDeep(state.products);

      productsToCreate.push(action.payload);

      return {
        ...state,
        products: productsToCreate,
        selectedProduct: null
      };
    case ProductActionsTypes.UPDATE_PRODUCT:
      const productsUpdate = _.cloneDeep(state.products);
      const indexUpdate = _.findIndex(productsUpdate, (e) => e.id == action.id);

      if (indexUpdate > -1) {
        productsUpdate[indexUpdate] = action.payload;
      }

      return {
        ...state,
        products: productsUpdate,
        selectedProduct: null
      };
    case ProductActionsTypes.DELETE_PRODUCT:
      const productsDelete = _.cloneDeep(state.products);
      const indexDelete = _.findIndex(productsDelete, (e) => e.id == action.id);

      if (indexDelete > -1) {
        productsDelete.splice(indexDelete, 1);
      }

      return {
        ...state,
        products: productsDelete,
        selectedProduct: null
      };
    default:
      return state;
  }
}
