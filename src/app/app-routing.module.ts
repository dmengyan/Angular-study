import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketsComponent } from './base/markets.component';
import { SportsComponent } from './base/sports.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/markets', pathMatch: 'full' },
  { path: 'markets', component: MarketsComponent },                                     // 首页 架构图
  { path: 'sports', component: SportsComponent },                                       // i18n 国际化
  { path: 'router', loadChildren: './router/router.module#RouterModule' },              // 路由
  { path: 'module', loadChildren: './module/module.module#ModuleModule' },              // 模块
  { path: 'component', loadChildren: './component/component.module#ComponentModule'},   // 组件
  { path: 'template', loadChildren: './template/template.module#TemplateModule'},       // 模板
  { path: 'weather', loadChildren: './weather/weather.module#WeatherModule' },          // 表单
  { path: 'service', loadChildren: './service/service.module#ServiceModule' },          // 服务
  { path: 'di', loadChildren: './di/di.module#DiModule' },                              // 依赖注入
  { path: 'http', loadChildren: './http/http.module#HttpModule' },                      // Http
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)    // 除了根模块，其他均用 forChild()
  ],
  exports: [RouterModule]              // 导出供 RouterLink 和 RouterOutlet 使用
})
export class AppRoutingModule {

}
