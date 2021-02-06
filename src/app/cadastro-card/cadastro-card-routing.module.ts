import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCardPage } from './cadastro-card.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroCardPageRoutingModule {}
