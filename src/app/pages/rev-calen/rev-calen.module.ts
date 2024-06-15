import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevCalenPageRoutingModule } from './rev-calen-routing.module';
import { RevCalenPage } from './rev-calen.page';

import { ComponentsModule } from 'src/app/components/components.module';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevCalenPageRoutingModule,
    ComponentsModule,
    MatButtonModule, MatBottomSheetModule, 
  ],
  declarations: [RevCalenPage]
})
export class RevCalenPageModule {}
