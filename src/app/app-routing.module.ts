import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainSliderAreaComponent } from './main-slider-area/main-slider-area.component';
import { AboutComponent } from './about/about.component';
import { PrincipleComponent } from './principle/principle.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import {FeedbackComponent} from './feedback/feedback.component';
import { ProductDetailsComponent } from './products/product-details.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    },
  {
    path: 'home',
    component: MainSliderAreaComponent },
  {
    path: 'contact-us',
    component: ContactComponent },
  {
    path: 'About',
    component: AboutComponent
  },
   {
     path: 'principle',
     component: PrincipleComponent
   },
   {
     path: 'view-products',
     component: ProductsComponent
   },
   {
      path: 'product/:id',
      component: ProductDetailsComponent
   },
   {
     path: 'Feedback',
     component: FeedbackComponent
   }
 ];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
 }
