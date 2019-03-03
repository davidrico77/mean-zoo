import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
	selector: 'parks',
	templateUrl: './parks.component.html'
})

export class  ParksComponent implements OnChanges, OnInit  {
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

	//Hook that is executed when any property of our component is modified 
	ngOnChanges(changes: SimpleChanges){
		//console.log(changes);
		console.log('There are changes in the properties');

	}

	//Hook that is executed when the component is load (p.e label <parks>)
	ngOnInit(){
		console.log('OnInit method thrown');
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
