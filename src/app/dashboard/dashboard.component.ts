import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {
	private heroes:Array<Hero>;
  constructor(private heroService:HeroService) {
  	this.heroes=[];
   }

  ngOnInit() {
  	this.heroes=this.heroService.getHeroes().slice(1,4);
  }

}
