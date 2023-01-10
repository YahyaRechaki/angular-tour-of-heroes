import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  // The CSS element selector (selector), 'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Always export the component class so you can import it elsewhere … like in the AppModule.
export class HeroesComponent implements OnInit {

  selectedHero ?: Hero; // the "?" means that the selectedHero property may or may not have a value of type Hero. and if it does have a value, all of the properties in the Hero interface must be present and have the correct types.

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
