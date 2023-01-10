import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // The purpose of this type is to provide type information for the values that will be emitted by the Observable.
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    console.log("typeof heroes : ", typeof heroes)
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
