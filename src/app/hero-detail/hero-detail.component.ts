import { Component, OnInit ,Input } from '@angular/core';
import { Hero } from '../Hero';
//import { HeroService }        from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']//,
  //providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
@Input('hero') hero:Hero;
  constructor() { 

  }

  ngOnInit() {
  }

}