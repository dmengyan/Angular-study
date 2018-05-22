import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T1Component } from './t1/t1.component';
import { T2Component } from './t2/t2.component';
import { T3Component } from './t3/t3.component';
import { T4Component } from './t4/t4.component';
import { T5Component } from './t5/t5.component';
import { T6Component } from './t6/t6.component';
import { T7Component } from './t7/t7.component';
import { T8Component } from './t8/t8.component';

const routes: Routes = [
  { path: '', component: T1Component },
  { path: 't1', component: T1Component },
  { path: 't2', component: T2Component },
  { path: 't3', component: T3Component },
  { path: 't4', component: T4Component },
  { path: 't5', component: T5Component },
  { path: 't6', component: T6Component },
  { path: 't7', component: T7Component },
  { path: 't8', component: T8Component }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
