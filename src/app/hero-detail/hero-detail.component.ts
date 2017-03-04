import 'rxjs/add/operator/switchMap';
import { Component, OnInit ,Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero } from '../Hero';
import { HeroService }        from '../hero.service';
@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
//@Input('hero') hero:Hero;
  private hero:Hero;
  private id:number;
  constructor( 
  	private heroService: HeroService,
  	private route: ActivatedRoute,
  	private location: Location
  	){ 
    this.id=-1;
  	}

  ngOnInit():void {
     //this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id']));
     this.route.params.subscribe(_hero => {
       this.id = +_hero['id']; // (+) converts string 'id' to a number
       
      // In a real app: dispatch action to load the details here.
      this.hero=this.heroService.getHero(this.id);
      
    });
  }

  goBack():void{
    this.location.back();    
  }
}