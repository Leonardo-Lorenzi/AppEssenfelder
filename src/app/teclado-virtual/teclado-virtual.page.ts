import { Component, OnInit } from '@angular/core';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-teclado-virtual',
  templateUrl: './teclado-virtual.page.html',
  styleUrls: ['./teclado-virtual.page.scss'],
})
export class TecladoVirtualPage implements OnInit {

  constructor(private nativeAudio: NativeAudio) { }

  ngOnInit() {
    this.nativeAudio.preloadSimple('do', '../../assets/song/do.wav');
    this.nativeAudio.preloadSimple('re', '../../assets/song/re.wav');
    this.nativeAudio.preloadSimple('mi', '../../assets/song/mi.wav');
    this.nativeAudio.preloadSimple('fa', '../../assets/song/fa.wav');
    this.nativeAudio.preloadSimple('sol', '../../assets/song/sol.wav');
    this.nativeAudio.preloadSimple('la', '../../assets/song/la.wav');
    this.nativeAudio.preloadSimple('si', '../../assets/song/si.wav');
    this.nativeAudio.preloadSimple('doOctave', '../../assets/song/doOctave.wav');
  }

  do() {
    this.nativeAudio.play('do', () => console.log('Dó'))
  }

  re() {
    this.nativeAudio.play('re', () => console.log('Ré'))
  }

  mi() {
    this.nativeAudio.play('mi', () => console.log('Mi'))
  }

  fa() {
    this.nativeAudio.play('fa', () => console.log('Fá'))
  }

  sol() {
    this.nativeAudio.play('sol', () => console.log('Sol'))
  }

  la() {
    this.nativeAudio.play('la', () => console.log('Lá'))
  }

  si() {
    this.nativeAudio.play('si', () => console.log('Si'))
  }

  doOctave() {
    this.nativeAudio.play('doOctave', () => console.log('Do Octave'))
  }

}
