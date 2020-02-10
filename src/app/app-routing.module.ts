import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CartChooserComponent} from './cart-chooser/cart-chooser.component';
import {CheckoutComponent} from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartChooserComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
