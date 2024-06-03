import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanClasePageRoutingModule } from './plan-clase-routing.module';

import { PlanClasePage } from './plan-clase.page';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanClasePageRoutingModule,
    MatProgressSpinnerModule,
  ],
  declarations: [PlanClasePage]
})
export class PlanClasePageModule {}
