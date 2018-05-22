import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Di1Component} from './di1/di1.component';
import { Di2Component} from './di2/di2.component';
import { Di3Component} from './di3/di3.component';
import { Di4Component} from './di4/di4.component';

const routes: Routes = [
  { path: '', component: Di1Component },
  { path: 'di1', component: Di1Component },
  { path: 'di2', component: Di2Component },
  { path: 'di3', component: Di3Component },
  { path: 'di4', component: Di4Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiRoutingModule { }
