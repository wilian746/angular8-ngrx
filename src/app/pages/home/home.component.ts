import { Component, OnInit } from '@angular/core';
import { HeaderTable } from 'src/app/models/table.interface';
import * as ProductList from 'src/assets/data-static/products.json';

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

  constructor() {
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

}
