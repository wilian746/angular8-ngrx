import { IProduct } from '../../models/product.interface';

export interface ProductState {
  products: Array<IProduct>;
  selectedProduct: IProduct;
}

export const initialProductState: ProductState = {
  products: [],
  selectedProduct: null
};
