import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { ClassComponent } from './class/class.component';
import { DatatypeComponent } from './datatype/datatype.component';
import { VarComponent } from './var/var.component';
import { InterfaceComponent } from './interface/interface.component';
import { EchartsComponent } from './echarts/echarts.component';

// 引入echarts模块
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    OtherRoutingModule,
   //  NgxEchartsModule
  ],
  declarations: [ClassComponent, DatatypeComponent, VarComponent, InterfaceComponent, EchartsComponent]
})
export class OtherModule { }




