import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanClasePageRoutingModule } from './plan-clase-routing.module';

import { PlanClasePage } from './plan-clase.page';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ComponentsModule } from 'src/app/components/components.module';

import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanClasePageRoutingModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    ComponentsModule,
  ],
  declarations: [PlanClasePage]
})
export class PlanClasePageModule {}
