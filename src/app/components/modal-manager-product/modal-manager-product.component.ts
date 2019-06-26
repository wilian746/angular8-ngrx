import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    console.log('teste');
  }

  goToPage(routeName) {
    this.router.navigate([{outlets: {modal: routeName}}]);
  }
}
