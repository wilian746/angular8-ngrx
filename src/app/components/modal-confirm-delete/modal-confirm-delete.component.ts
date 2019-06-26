import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productName = this.id = this.route.snapshot.params.id;
  }

  goToPage(routeName) {
    this.router.navigate([{outlets: {modal: routeName}}]);
  }
}
