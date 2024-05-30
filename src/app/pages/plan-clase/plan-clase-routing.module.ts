import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanClasePage } from './plan-clase.page';

const routes: Routes = [
  {
    path: '',
    component: PlanClasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanClasePageRoutingModule {}
