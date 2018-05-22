import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { H1Component } from './h1/h1.component';
import { H2Component } from './h2/h2.component';
import { H3Component } from './h3/h3.component';
import { H4Component } from './h4/h4.component';
import { H5Component } from './h5/h5.component';

const routes: Routes = [
  { path: '', component: H1Component },
  { path: 'h1', component: H1Component },
  { path: 'h2', component: H2Component },
  { path: 'h3', component: H3Component },
  { path: 'h4', component: H4Component },
  { path: 'h5', component: H5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpRoutingModule { }
