import { Component } from '@angular/core';

@Component({
	selector: 'shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.css']
})

export class  ShopComponent  {
	public titleShop;

	constructor(){
		this.titleShop = 'This is the shop';
	}
} 
