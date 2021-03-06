import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalManagerProductComponent } from './components/modal-manager-product/modal-manager-product.component';
import { ModalConfirmDeleteComponent } from './components/modal-confirm-delete/modal-confirm-delete.component';
import { ProductService } from './services/product/product.service';
import { TooltipModule } from 'ng2-tooltip-directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { countStore } from './store/reducers/count.reducers';
import { productStore } from './store/reducers/product.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalManagerProductComponent,
    ModalConfirmDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      count: countStore,
      product: productStore
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
