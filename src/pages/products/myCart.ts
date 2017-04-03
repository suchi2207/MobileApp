import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ProductService } from '../../services/product.service';
import { SelectedProduct } from '../../models/product'
import { userDetailsPage } from '../User/user_details';
import { ProductPage } from '../products/products';

@Component({
    selector: 'page-myCart',
    templateUrl: 'myCart.html'
})
export class myCartPage {
    userDetailsPage = userDetailsPage;
    productPage = ProductPage;
    platform: Platform;
    nav: NavController;
    selectedItemsCount: number
    selProducts: SelectedProduct[];
    totalPrice: number;
    constructor(public navCtrl: NavController, private _productService: ProductService, private _platform: Platform) {
        this.selProducts = this._productService.selectedProducts;
        this.platform = this._platform;
        this.nav = this.navCtrl;
        this.selectedItemsCount = 0;
        this.updateSelProdcutCount();
    }

    updateTotalPrice() {
        this.totalPrice = 0;
        if (this._productService.selectedProducts != undefined) {
            for (let seleProduct of this._productService.selectedProducts) {
                this.totalPrice += seleProduct.qty * seleProduct.product.price;
            }
            this.updateSelProdcutCount();
        }
    }

    updateSelProdcutCount() {
        if (this._productService.selectedProducts != undefined)
            this.selectedItemsCount = this._productService.selectedProducts.length;
    }

    removeProductFromCart(removedProduct: SelectedProduct) {
        var index = this._productService.selectedProducts.indexOf(removedProduct);
        if (index > -1) {
            this._productService.selectedProducts.splice(index, 1);
            this.updateTotalPrice();
            this._productService.showToast("selected product removed from cart");
        }
    }
    navigateToUserDetails() {
        this.nav.push(userDetailsPage, { firstname: "Sulochana", lastname: "K" }
        );
    }

    navigateToProducts() {
        this.nav.push(this.productPage, {});
    }


    ionViewWillEnter() {
        this.updateTotalPrice();
    }
}
