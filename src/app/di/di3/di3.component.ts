import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero, HeroTaxReturn } from './hero';
import { HeroesService} from './heroes.service';

@Component({
  selector: 'app-di3',
  templateUrl: './di3.component.html',
  providers: [ HeroesService ],
  styles: [ 'li {cursor: pointer;}' ]
})
export class Di3Component implements OnInit {
  heroes: Observable<Hero[]>;
  selectedTaxReturns: HeroTaxReturn[] = [];

  constructor(private  heroesService: HeroesService) { }

  ngOnInit() {
    // 获取heroes
    this.heroes = this.heroesService.getHeroes();
  }

  showTaxReturn(hero: Hero) {
    this.heroesService.getTaxReturn(hero)
      .subscribe(htr => {
        // show if not currently shown
        if (!this.selectedTaxReturns.find(tr => tr.id === htr.id)) {
          this.selectedTaxReturns.push(htr);
        }
      });
  }

  closeTaxReturn(ix: number) {
    this.selectedTaxReturns.splice(ix, 1);
  }

}
