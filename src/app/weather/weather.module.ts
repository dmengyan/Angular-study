import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { WeatherRoutingModule } from './weather-routing.module';
import { W1Service } from './w1/w1.service';
import { W1Component } from './w1/w1.component';
import { W2Component } from './w2/w2.component';
import { W3Component } from './w3/w3.component';
import { W4Component } from './w4/w4.component';
import { W5Component } from './w5/w5.component';
import { ForbiddenValidatorDirective } from './w4/forbidden-name.directive'; // 自定义验证指令
import { HeroListComponent } from './w3/hero-list/hero-list.component';
import { DynamicFormModule } from './w5/dynamic-form/dynamic-form.module';    // 动态表单

@NgModule({
  imports: [
    CommonModule, WeatherRoutingModule, FormsModule, ReactiveFormsModule, HttpModule, DynamicFormModule
  ],
  declarations: [W1Component, W2Component, W3Component,
    W4Component, W5Component, ForbiddenValidatorDirective, HeroListComponent],
  providers: [W1Service]
})
export class WeatherModule { }
