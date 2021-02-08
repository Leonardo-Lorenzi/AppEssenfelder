import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecladoVirtualPage } from './teclado-virtual.page';

const routes: Routes = [
  {
    path: '',
    component: TecladoVirtualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecladoVirtualPageRoutingModule {}
