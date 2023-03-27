import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductitemComponent } from './product-item/product-item.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { ButtonComponent } from './button/button.component';
import { AmountSelectorComponent } from './amount-selector/amount-selector.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
declarations: [
AppComponent,
ProductListComponent,
ProductitemComponent,
ProductItemDetailComponent,
PageNotFoundComponent,
HeaderComponent,
DashboardComponent,
ConfirmationComponent,
CheckoutFormComponent,
CartComponent,
CartProductComponent,
ButtonComponent,
AmountSelectorComponent
],
imports: [
HttpClientModule,
BrowserModule,
AppRoutingModule,
CommonModule,
FormsModule,
RouterModule,
NgxSkeletonLoaderModule,
],
schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }