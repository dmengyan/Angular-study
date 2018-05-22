import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { H1Component } from './h1/h1.component';
import { H2Component } from './h2/h2.component';
import { H3Component } from './h3/h3.component';
import { H4Component } from './h4/h4.component';
import { H5Component } from './h5/h5.component';

@NgModule({
  imports: [
    CommonModule,
    HttpRoutingModule
  ],
  declarations: [H1Component, H2Component, H3Component, H4Component, H5Component]
})
export class HttpModule { }
