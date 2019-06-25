import { Component, OnInit } from '@angular/core';
import { HeaderTable } from 'src/app/models/table.interface';
import * as ProductList from 'src/assets/data-static/products.json';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  table: {
    cols: HeaderTable[],
    data: any,
  };

  selectedRow: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.table = {
      cols: [
        { field: 'name', header: 'Nome' },
        { field: 'price', header: 'Preço' },
        { field: 'weight', header: 'Peso' },
        { field: 'measure', header: 'Unidade de medida' },
        { field: 'action', header: 'Ações' }
      ],
      data: [],
    };
  }

  ngOnInit() {
    this.table.data = ProductList[Object.keys(ProductList)[0]];
  }

  goToPage(routeName) {
    this.router.navigate([{outlets: {modal: routeName}}]);
  }
}
