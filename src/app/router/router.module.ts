import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterRoutingModule } from './router-routing.module';
import { R1Component } from './r1/r1.component';
import { R2Component } from './r2/r2.component';
import { R3Component } from './r3/r3.component';

@NgModule({
  imports: [
    CommonModule,
    RouterRoutingModule
  ],
  declarations: [ R1Component, R2Component, R3Component]
})
export class RouterModule { }
