import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanUniPageRoutingModule } from './plan-uni-routing.module';

import { PlanUniPage } from './plan-uni.page';

import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanUniPageRoutingModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    ComponentsModule,
  ],
  declarations: [PlanUniPage]
})
export class PlanUniPageModule {}
