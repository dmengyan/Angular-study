import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { R1Component } from './r1/r1.component';
import { R2Component } from './r2/r2.component';
import { R3Component } from './r3/r3.component';

const routes: Routes = [
  {path: '', component: R1Component},
  {path: 'r1', component: R1Component},
  {path: 'r2', component: R2Component},
  {path: 'r3', component: R3Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
