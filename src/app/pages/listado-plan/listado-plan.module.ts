import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPlanPageRoutingModule } from './listado-plan-routing.module';

import { ListadoPlanPage } from './listado-plan.page';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPlanPageRoutingModule,
    MatTableModule,
  ],
  declarations: [ListadoPlanPage]
})
export class ListadoPlanPageModule {}
