import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
	public selectedHero:Hero;
	
	public heroes:Array<Hero>;
  constructor(private heroService:HeroService) { 
  	
	this.heroes=[];
  }

	ngOnInit() {
		
		this.heroes = this.heroService.getHeroes();
	}

	viewDetails(_heroe:Hero):void{
		this.selectedHero = _heroe;
	}
}