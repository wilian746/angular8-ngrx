import { Component, OnInit } from '@angular/core';
import { HeaderTable } from 'src/app/models/table.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product.interface';
import { Store, select } from '@ngrx/store';
import { ProductState } from 'src/app/store/state/product.state';
import { SetSelectedProduct } from 'src/app/store/actions/product.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  table: {
    cols: HeaderTable[],
    data: Array<IProduct>,
  };

  selectedRow: any;

  constructor(
    private router: Router,
    public store: Store<{ product: ProductState }>
  ) {
    this.table = {
      cols: [
        { field: 'name', header: 'Nome' },
        { field: 'price', header: 'Preço' },
        { field: 'weight', header: 'Peso' },
        { field: 'measure', header: 'Unidade de medida' },
        { field: 'action', header: 'Ações' }
      ],
      data: null,
    };

    store.pipe(select('product')).subscribe((state: ProductState) => {
      this.table.data = state.products;
    });
  }

  ngOnInit() {
  }

  goToPage(routerType, data) {
    if (data) {
      this.store.dispatch(new SetSelectedProduct(data));
      this.router.navigate([{outlets: {modal: `${routerType}/${data.id}`}}]);
    } else {
      this.router.navigate([{outlets: {modal: routerType}}]);
    }

  }
}
