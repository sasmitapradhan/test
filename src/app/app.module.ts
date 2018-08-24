import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSliderAreaComponent } from './main-slider-area/main-slider-area.component';
import { AboutComponent } from './about/about.component';
import { PrincipleComponent } from './principle/principle.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './/app-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { ProductDetailsComponent } from './products/product-details.component';
import { WasteCompostComponent } from './waste-compost/waste-compost.component';



declare var PrayTimes: any;
declare var System: any;
declare var $: any;
declare var moment: any;
declare var Chart: any;

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainSliderAreaComponent },
  { path: 'contact-us', component: ContactComponent },
 { path: 'About', component: AboutComponent },
 { path: 'principle', component: PrincipleComponent },
 { path: 'view-products', component: ProductsComponent }
 ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSliderAreaComponent,
    AboutComponent,
    PrincipleComponent,
    ContactComponent,
    FooterComponent,
    ProductsComponent,
    FeedbackComponent,
    StarComponent,
    ProductDetailsComponent,
    WasteCompostComponent
  ],
  imports: [
    BrowserModule,
    StarRatingModule.forRoot(),
    RouterModule.forRoot(
      appRoutes),
    AppRoutingModule,
   HttpClientModule,
  ReactiveFormsModule
  ],
  providers: [
    Title,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
