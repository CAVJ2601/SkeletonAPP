import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanUniPageRoutingModule } from './plan-uni-routing.module';

import { PlanUniPage } from './plan-uni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanUniPageRoutingModule
  ],
  declarations: [PlanUniPage]
})
export class PlanUniPageModule {}
