import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevCalenPage } from './rev-calen.page';

const routes: Routes = [
  {
    path: '',
    component: RevCalenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevCalenPageRoutingModule {}
