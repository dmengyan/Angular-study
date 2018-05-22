import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';

import { M1Component } from './m1/m1.component';
import { M2Component } from './m2/m2.component';
import { M3Component } from './m3/m3.component';
import { M4Component } from './m4/m4.component';
import { M5Component } from './m5/m5.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleRoutingModule
  ],
  declarations: [ M1Component, M2Component, M3Component, M4Component, M5Component]
})
export class ModuleModule { }
