import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BaseModule } from './base/base.module';
import { AppRoutingModule } from './app-routing.module';
// 动画
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent   // 这里不是入口组件，虽然我们会在index.html里使用组件的selector<app-root></app-root>的位置，
    // 但是Angular并不是根据此selector来加载AppComponent。这是容易让人误解的地方。因为index.html不属于任何组件模板
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BaseModule,
    AppRoutingModule,
    BrowserAnimationsModule  // 动画
  ],
  bootstrap: [AppComponent]   // 入口组件  Angular通过编程使用bootstrap里声明的AppComponent类型加载组件
  // @NgModule.bootstrap 属性告诉编译器，这里是一个入口组件，它应该生成代码，来使用这个组件引导该应用。
})
export class AppModule { }
