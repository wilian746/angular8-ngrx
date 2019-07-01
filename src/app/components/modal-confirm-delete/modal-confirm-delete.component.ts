import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductState } from 'src/app/store/state/product.state';
import { Store, select } from '@ngrx/store';
import * as _ from 'lodash';
import { DeleteProduct } from 'src/app/store/actions/product.action';

@Component({
  selector: 'app-modal-confirm-delete',
  exportAs: 'modal',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.scss']
})
export class ModalConfirmDeleteComponent implements OnInit {

  productName: string;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<{ product: ProductState }>
  ) {
  }

  ngOnInit() {
    this.store.pipe(select('product')).subscribe((state: ProductState) => {
      const id = this.route.snapshot.params.id;
      const index = _.findIndex(state.products, (e) => e.id == id);

      if (index > -1) {
        this.productName = state.products[index].name;
      }
    });
  }

  goToPage() {
    this.router.navigate([{outlets: {modal: null}}]);
  }

  delete() {
    this.store.dispatch(new DeleteProduct(this.route.snapshot.params.id));

    this.router.navigate([{outlets: {modal: null}}]);
  }
}
