import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'parks',
	templateUrl: './parks.component.html'
})

export class  ParksComponent  {
	@Input() name: string;
	@Input('meters_square') meters: number;
	public vegetation: string;
	public open: boolean;

	@Output() passMeTheData = new EventEmitter();

	constructor(){
		this.name = 'Natural Park for horses';
		this.meters=450;
		this.vegetation='High';
		this.open=false;
	}

	emitEvent(){
		this.passMeTheData.emit({
		'name' : this.name ,
		'meters' : this.meters,
		'vegetation' : this.vegetation,
		'open' : this.open,
		});
	}
} 
