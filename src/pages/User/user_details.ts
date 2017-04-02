import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import  {ProductPage}  from '../products/products';
import { ProductService } from '../../services/product.service';
import { FormBuilder,Validators, FormGroup} from '@angular/forms'

@Component({
    selector: 'page-userDetails',
    templateUrl: 'user_details.html'
})
export class userDetailsPage {
    productPage = ProductPage;
    isSubmitted: boolean;
    platform: Platform;
    navParams: NavParams;
    nav: NavController;
    userDetailsForm: FormGroup;
    //  firstname :string;
    //  lastname : string;
    constructor(public formBuilder: FormBuilder,public navCtrl: NavController, platform: Platform, navParams: NavParams, private _productService: ProductService, ) {
        this.isSubmitted = false;
        this.platform = platform;
        this.navParams = navParams;
        this.nav = this.navCtrl;
        // this.firstname = navParams.get("firstname");
        // this.lastname = navParams.get("lastname");
        this.userDetailsForm = formBuilder.group({
        UserName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        UserEmail: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-. ]*'), Validators.required])],
        UserPhone: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[1-9 ]*'), Validators.required])],
    });
    }

    navigateToProducts() {
        this._productService.selectedProducts = [];
        this.nav.push(this.productPage, {});
    }

    ionViewWillLoad() {

    }

}
