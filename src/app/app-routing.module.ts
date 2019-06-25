import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ModalManagerProductComponent } from './components/modal-manager-product/modal-manager-product.component';
import { ModalConfirmDeleteComponent } from './components/modal-confirm-delete/modal-confirm-delete.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  {
    path: 'product',
    component: HomeComponent,
  },
  { path: 'new', component: ModalManagerProductComponent, outlet: 'modal' },
  { path: 'edit/:id', component: ModalManagerProductComponent, outlet: 'modal' },
  { path: 'view/:id', component: ModalManagerProductComponent, outlet: 'modal' },
  { path: 'delete/:id', component: ModalConfirmDeleteComponent, outlet: 'modal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
