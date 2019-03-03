import { Component } from '@angular/core';

@Component({
	selector: 'parks',
	templateUrl: './parks.component.html'
})

export class  ParksComponent  {
	public name: string;
	public meters: number;
	public vegetation: string;
	public open: boolean;

	constructor(){
		this.name = 'Natural Park for horses';
		this.meters=450;
		this.vegetation='High';
		this.open=false;
	}
} 
