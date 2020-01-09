import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GanaderiaPageRoutingModule } from './ganaderia-routing.module';

import { GanaderiaPage } from './ganaderia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GanaderiaPageRoutingModule
  ],
  declarations: [GanaderiaPage]
})
export class GanaderiaPageModule {}
