import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: HomeComponent },
  { path: 'product/new', component: HomeComponent },
  { path: 'product/edit/:id', component: HomeComponent },
  { path: 'product/view/:id', component: HomeComponent },
  { path: 'product/delete/:id', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
