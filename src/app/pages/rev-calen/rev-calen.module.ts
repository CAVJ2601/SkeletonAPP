import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevCalenPageRoutingModule } from './rev-calen-routing.module';

import { RevCalenPage } from './rev-calen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevCalenPageRoutingModule
  ],
  declarations: [RevCalenPage]
})
export class RevCalenPageModule {}
