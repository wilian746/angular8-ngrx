import { Action } from '@ngrx/store';
import { IProduct } from 'src/app/models/product.interface';

export const ProductActionsTypes = {
  GET_ALL_PRODUCT: '[StateProduct] GetAll user',
  GET_ONE_PRODUCT: '[StateProduct] GetOne user',
  SET_SELECTED_PRODUCT: '[StateProduct] SetSelected user',
  CREATE_PRODUCT: '[StateProduct] Create user',
  UPDATE_PRODUCT: '[StateProduct] Update user',
  DELETE_PRODUCT: '[StateProduct] Delete user'
};

export class CreateProduct implements Action {
  public readonly type = ProductActionsTypes.CREATE_PRODUCT;
  constructor(public payload: IProduct) { }
}

export class SetSelectedProduct implements Action {
  public readonly type = ProductActionsTypes.SET_SELECTED_PRODUCT;
  constructor(public payload: IProduct) { }
}

export class UpdateProduct implements Action {
  public readonly type = ProductActionsTypes.UPDATE_PRODUCT;
  constructor(
      public id: number,
      public payload: IProduct,
    ) { }
}

export class DeleteProduct implements Action {
  public readonly type = ProductActionsTypes.DELETE_PRODUCT;
  constructor(public id: number) { }
}

export type ProductActionsUnion = CreateProduct | UpdateProduct | DeleteProduct;
