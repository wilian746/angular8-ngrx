import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-manager-product',
  exportAs: 'modal',
  templateUrl: './modal-manager-product.component.html',
  styleUrls: ['./modal-manager-product.component.scss']
})
export class ModalManagerProductComponent implements OnInit {

  id: string;
  modalType: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    if (this.route.snapshot.routeConfig.path.includes('new')) {
      this.modalType = 'Adicionar';
    }
    if (this.route.snapshot.routeConfig.path.includes('edit')) {
      this.modalType = 'Editar';
    }
    if (this.route.snapshot.routeConfig.path.includes('view')) {
      this.modalType = 'Visualizar detalhes do';
    }
  }

  goToPage(routeName) {
    this.router.navigate([{outlets: {modal: routeName}}]);
  }
}
