import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroAdressPageRoutingModule } from './cadastro-adress-routing.module';

import { CadastroAdressPage } from './cadastro-adress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAdressPageRoutingModule
  ],
  declarations: [CadastroAdressPage]
})
export class CadastroAdressPageModule {}
