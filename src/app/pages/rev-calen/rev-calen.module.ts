import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevCalenPageRoutingModule } from './rev-calen-routing.module';
import { RevCalenPage } from './rev-calen.page';

import { ComponentsModule } from 'src/app/components/components.module';
import { BottomSheetCalenComponent } from 'src/app/components/bottom-sheet-calen/bottom-sheet-calen.component';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevCalenPageRoutingModule,
    ComponentsModule,
    MatButtonModule, MatBottomSheetModule, MatListModule,
  ],
  declarations: [RevCalenPage, BottomSheetCalenComponent]
})
export class RevCalenPageModule {}
