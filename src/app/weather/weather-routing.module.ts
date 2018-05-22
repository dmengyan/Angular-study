import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';


import { W1Component } from './w1/w1.component';
import { W2Component } from './w2/w2.component';
import { W3Component } from './w3/w3.component';
import { HeroListComponent } from './w3/hero-list/hero-list.component';
import { W4Component } from './w4/w4.component';
import { W5Component } from './w5/w5.component';

const routes: Routes = [
  { path: '', component: W1Component },
  { path: 'yahoo', component: W1Component },
  { path: 'facts', component: W2Component },
  { path: 'globalwarming', component: HeroListComponent },
  { path: 'w4', component: W4Component },
  { path: 'w5', component: W5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
