import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { ChildComponent } from './c1/child/child.component';
import { DynamicComponentComponent } from './c4/dynamic-component/dynamic-component.component';
import { HeroJobAdComponent} from './c4/hero-job-ad.component';
import { HeroProfileComponent } from './c4/hero-profile.component';
import { AdDirective } from './c4/ad.directive';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  declarations: [
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    ChildComponent,
    DynamicComponentComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
})
export class ComponentModule { }
