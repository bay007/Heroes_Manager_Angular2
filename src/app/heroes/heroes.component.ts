import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
	public selectedHero:Hero;
	public heroes:Array<Hero>;

  constructor(private heroService:HeroService,private router:Router) { 
	this.heroes=[];
  }

	ngOnInit() {
		this.heroes = this.heroService.getHeroes();
	}

	viewDetails(_heroe:Hero):void{
		this.selectedHero = _heroe;
	}

	gotoDetail(){
		this.router.navigate(['/detail',this.selectedHero.id]);
	}
}