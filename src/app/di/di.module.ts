import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiRoutingModule } from './di-routing.module';
import { Di1Component } from './di1/di1.component';
import { FormsModule } from '@angular/forms';
import { Di2Component } from './di2/di2.component';
import { Di3Component } from './di3/di3.component';
import { Di4Component } from './di4/di4.component';
import { TaxReturnComponent } from './di3/tax-return/tax-return.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DiRoutingModule
  ],
  declarations: [ Di1Component, Di2Component, Di3Component, Di4Component, TaxReturnComponent]
})
export class DiModule { }
