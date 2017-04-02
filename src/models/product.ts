export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	quantity:number;
	category:string;
	categoryId:number;
	imageUrl : string;
}

export interface SelectedProduct {
	product: Product;
	qty : number;	 
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/