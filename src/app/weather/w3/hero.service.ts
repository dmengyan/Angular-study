import { Injectable } from '@angular/core';
import { Hero , heroes } from './hero-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

@Injectable()
export class HeroService {
  delayMs = 500;
  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(heroes).pipe(delay(this.delayMs));
  }

  updateHero(hero: Hero): Observable<Hero> {
    const oldHero = heroes.find(h => h.id === hero.id );
    const newHero = Object.assign(oldHero, hero);
    // assign 赋值
    // Object.assign(目标对象，源对象1，源对象2，...)
    // 复制对象,合并对象,返回目标对象
    return of(newHero).pipe(delay(this.delayMs));
  }


}
