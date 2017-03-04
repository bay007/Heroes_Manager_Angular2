import { Component } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {

	constructor(){	}

	ngOnInit(): void {  	}
	
	

	

}

RouterModule.forRoot([
	{path: 'heroes',component: HeroesComponent}
	])