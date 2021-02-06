import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroCardPageRoutingModule } from './cadastro-card-routing.module';

import { CadastroCardPage } from './cadastro-card.page';

import { PayPal } from '@ionic-native/paypal/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroCardPageRoutingModule
  ],
  declarations: [CadastroCardPage],
  providers: [
    PayPal
  ]
})
export class CadastroCardPageModule {}
