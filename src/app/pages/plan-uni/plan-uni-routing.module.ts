import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanUniPage } from './plan-uni.page';

const routes: Routes = [
  {
    path: '',
    component: PlanUniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanUniPageRoutingModule {}
