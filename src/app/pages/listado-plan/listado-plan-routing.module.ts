import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPlanPage } from './listado-plan.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPlanPageRoutingModule {}
