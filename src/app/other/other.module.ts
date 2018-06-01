import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { ClassComponent } from './class/class.component';
import { DatatypeComponent } from './datatype/datatype.component';
import { VarComponent } from './var/var.component';
import { InterfaceComponent } from './interface/interface.component';

@NgModule({
  imports: [
    CommonModule,
    OtherRoutingModule
  ],
  declarations: [ClassComponent, DatatypeComponent, VarComponent, InterfaceComponent]
})
export class OtherModule { }
