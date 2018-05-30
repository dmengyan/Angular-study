import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { ClassComponent } from './class/class.component';

@NgModule({
  imports: [
    CommonModule,
    OtherRoutingModule
  ],
  declarations: [ClassComponent]
})
export class OtherModule { }
