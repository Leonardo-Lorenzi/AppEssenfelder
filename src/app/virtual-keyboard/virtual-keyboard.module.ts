import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

import { VirtualKeyboardPageRoutingModule } from './virtual-keyboard-routing.module';

import { VirtualKeyboardPage } from './virtual-keyboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualKeyboardPageRoutingModule
  ],
  declarations: [VirtualKeyboardPage],
  providers: [
    NativeAudio
  ]
})
export class VirtualKeyboardPageModule {}
