import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GanaderiaPage } from './ganaderia.page';

const routes: Routes = [
  {
    path: '',
    component: GanaderiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GanaderiaPageRoutingModule {}
