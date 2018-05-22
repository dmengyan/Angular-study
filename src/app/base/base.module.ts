import { NgModule } from '@angular/core';

import { MarketsComponent } from './markets.component';
import { SportsComponent } from './sports.component';
// import { AppRoutingModule } from '../app-routing.module';

@NgModule({

  declarations: [MarketsComponent, SportsComponent],  // BaseModule导出market,sports组件
  imports: [
  ],
  exports: [
  ]
})
export class BaseModule { }
