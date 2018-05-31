import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { DatatypeComponent } from './datatype/datatype.component';
import { VarComponent } from './var/var.component';

const routes: Routes = [
  { path: 'class', component: ClassComponent },
  { path: 'datatype', component: DatatypeComponent },
  { path: 'var', component: VarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
