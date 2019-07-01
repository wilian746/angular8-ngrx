import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { IProduct } from 'src/app/models/product.interface';
import { CreateProduct, UpdateProduct, SetSelectedProduct } from 'src/app/store/actions/product.action';
import { ProductState } from 'src/app/store/state/product.state';

@Component({
  selector: 'app-modal-manager-product',
  exportAs: 'modal',
  templateUrl: './modal-manager-product.component.html',
  styleUrls: ['./modal-manager-product.component.scss']
})
export class ModalManagerProductComponent implements OnInit {

  id: string;
  modalTitle: string;
  typeModal: string;
  listMeasure: Array<any>;
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<{ user: IProduct }>
  ) {
    this.listMeasure = [
      { value: 'UN', text: 'Unidade', isSelected: false },
      { value: 'KG', text: 'Kilo', isSelected: true },
      { value: 'L', text: 'Litro', isSelected: false }
    ];
    this.form = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      weight: [null, Validators.required],
      measure: [null, Validators.required],
      quantity: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.store.pipe(select('product')).subscribe((state: ProductState) => {
      if (state.selectedProduct) {
        this.form.patchValue({
          id: state.selectedProduct.id,
          name: state.selectedProduct.name,
          description: state.selectedProduct.description,
          price: state.selectedProduct.price,
          weight: state.selectedProduct.weight,
          measure: state.selectedProduct.measure,
          quantity: state.selectedProduct.quantity
        });
      }
    });

    this.id = this.route.snapshot.params.id;
    if (this.route.snapshot.routeConfig.path.includes('new')) {
      this.modalTitle = 'Adicionar produto';
      this.typeModal = 'new';
    }
    if (this.route.snapshot.routeConfig.path.includes('edit')) {
      this.modalTitle = 'Editar produto';
      this.typeModal = 'edit';
    }
    if (this.route.snapshot.routeConfig.path.includes('view')) {
      this.modalTitle = 'Visualizar detalhes do produto';
      this.typeModal = 'view';
      this.form.disable();
    }
  }

  save() {
    if (this.typeModal === 'new') {
      this.form.patchValue({
        id: Math.floor((Math.random() * 40000000) + 1)
      });
    }


    if (this.form.valid) {
      const data: IProduct = {
        id: this.form.value.id,
        name: this.form.value.name,
        description: this.form.value.description,
        price: this.form.value.price,
        weight: this.form.value.weight,
        measure: this.form.value.measure,
        quantity: this.form.value.quantity
      };

      if (this.typeModal === 'new') {
        this.store.dispatch(new CreateProduct(data));
      }

      if (this.typeModal === 'edit') {
        this.store.dispatch(new UpdateProduct(data.id, data));
      }

      this.goToPage();
    } else {
      console.error('FORM INVALID!');
    }
  }

  goToPage() {
    this.router.navigate([{outlets: {modal: null}}]);
    this.store.dispatch(new SetSelectedProduct(null));
  }
}
