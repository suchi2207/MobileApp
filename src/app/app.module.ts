import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ProductPage } from '../pages/products/products';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductService } from '../services/product.service';
import {myCartPage} from '../pages/products/myCart';
import {userDetailsPage} from '../pages/User/user_details';
import { Toast } from '@ionic-native/toast';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProductPage,
    TabsPage,
    myCartPage,
    userDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    ProductPage,
    HomePage,
    TabsPage,
    myCartPage,
    userDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ProductService,Toast]
})
export class AppModule {}
