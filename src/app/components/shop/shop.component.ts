import { Component } from '@angular/core';

@Component({
	selector: 'shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.css']
})

export class  ShopComponent  {
	public titleShop;
	public namePark: string;
	public myPark;

	constructor(){
		this.titleShop = 'This is the shop';
	}

	showName(){
		console.log(this.namePark);
	}

	showParkData(event){
		console.log(event);
		this.myPark = event;

	}
} 
