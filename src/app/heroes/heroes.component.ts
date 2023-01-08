import { Component } from '@angular/core';
import {HEROES} from '../mock-heroes'
import { Hero } from '../hero';

// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  // The CSS element selector (selector), 'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Always export the component class so you can import it elsewhere … like in the AppModule.
export class HeroesComponent {
  heroes = HEROES
  chosenHero: any;
  selectedHero ?: Hero; // the "?" means that the selectedHero property may or may not have a value of type Hero. and if it does have a value, all of the properties in the Hero interface must be present and have the correct types.

  onSelect(hero: any): void{
    this.selectedHero = hero
  }
}
