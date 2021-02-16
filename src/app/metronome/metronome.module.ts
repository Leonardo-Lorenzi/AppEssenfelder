import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

import { MetronomePageRoutingModule } from './metronome-routing.module';

import { MetronomePage } from './metronome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetronomePageRoutingModule
  ],
  declarations: [MetronomePage],
  providers: [
    NativeAudio
  ]
})
export class MetronomePageModule {}
