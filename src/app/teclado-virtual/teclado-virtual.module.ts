import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

import { TecladoVirtualPageRoutingModule } from './teclado-virtual-routing.module';

import { TecladoVirtualPage } from './teclado-virtual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecladoVirtualPageRoutingModule
  ],
  declarations: [TecladoVirtualPage],
  providers: [
    NativeAudio
  ]
})
export class TecladoVirtualPageModule {}
