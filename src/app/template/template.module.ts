import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateRoutingModule } from './template-routing.module';
import { T1Component } from './t1/t1.component';
import { T2Component } from './t2/t2.component';
import { T3Component } from './t3/t3.component';
import { T4Component } from './t4/t4.component';
import { T5Component } from './t5/t5.component';
import { T6Component } from './t6/t6.component';
import { T7Component } from './t7/t7.component';
import { T8Component } from './t8/t8.component';
import { HighlightDirective } from './t2/highlight.directive';
import { UnlessDirective } from './t1/unless.directive';
import { ExponentPipe } from './t5/exponent.pipe';

@NgModule({
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ],
  declarations: [ T1Component, T2Component, T3Component, T4Component,
    T5Component, T6Component, T7Component, T8Component, HighlightDirective, UnlessDirective, ExponentPipe]
})
export class TemplateModule { }
