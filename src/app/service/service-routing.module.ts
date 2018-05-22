import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';
import { S3Component } from './s3/s3.component';
import { S4Component } from './s4/s4.component';
import { S5Component } from './s5/s5.component';

const routes: Routes = [
  { path: '', component: S1Component },
  { path: 's1', component: S1Component },
  { path: 's2', component: S2Component },
  { path: 's3', component: S3Component },
  { path: 's4', component: S4Component },
  { path: 's5', component: S5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
