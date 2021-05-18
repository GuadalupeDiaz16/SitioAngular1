import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Superman' },
      { id: 12, name: 'Batman' },
      { id: 13, name: 'Hulk' },
      { id: 14, name: 'Ironman' },
      { id: 15, name: 'Thor' },
      { id: 16, name: 'Spiderman' },
      { id: 17, name: 'Black Widow' },
      { id: 18, name: 'Flash' },
      { id: 19, name: 'Bruja Escarlata' },
      { id: 20, name: 'Wonder Woman' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}