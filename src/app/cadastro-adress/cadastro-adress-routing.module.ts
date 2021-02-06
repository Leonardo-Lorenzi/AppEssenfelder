import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroAdressPage } from './cadastro-adress.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroAdressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroAdressPageRoutingModule {}
