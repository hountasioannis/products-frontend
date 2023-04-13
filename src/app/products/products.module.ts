import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';

const routes: Routes = [
  {path: 'list', component: ProductsListComponent},
  {path: 'insert', component: ProductInsertComponent}
]

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductInsertComponent
  ],
  imports: [
    CommonModule ,RouterModule.forChild(routes), HttpClientModule, ReactiveFormsModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
