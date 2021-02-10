import { Component, OnInit } from '@angular/core';

import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { createAnimation, Animation } from '@ionic/core';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.page.html',
  styleUrls: ['./virtual-keyboard.page.scss'],
})
export class VirtualKeyboardPage implements OnInit {

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

  note: String;

  do() {
    this.nativeAudio.play('do', () => console.log("Dó"))
    this.note="Dó";
    const element = document.querySelector('.anime_note');
    element.classList.remove('color_animation_end');
    element.classList.add('animate__animated', 'animate__fadeOutDown')

    element.addEventListener('animationend', () => {
      element.classList.remove('animate__animated', 'animate__fadeOutDown')
      element.classList.add('color_animation_end');
    })
  }

  re() {
    this.nativeAudio.play('re', () => console.log('Ré'))
    this.note="Ré";
    const element = document.querySelector('.anime_note');
    element.classList.remove('color_animation_end');
    element.classList.add('animate__animated', 'animate__fadeOutDown');

    element.addEventListener('animationend', () => {
      element.classList.remove('animate__animated', 'animate__fadeOutDown');
      element.classList.add('color_animation_end');
    })
  }

  mi() {
    this.nativeAudio.play('mi', () => console.log('Mi'))
    this.note="Mi";
    const element = document.querySelector('.anime_note');
    element.classList.remove('color_animation_end');
    element.classList.add('animate__animated', 'animate__fadeOutDown')

    element.addEventListener('animationend', () => {
      element.classList.remove('animate__animated', 'animate__fadeOutDown')
      element.classList.add('color_animation_end');
    })
  }

  fa() {
    this.nativeAudio.play('fa', () => console.log('Fá'))
    this.note="Fá";
    const element = document.querySelector('.anime_note');
    element.classList.remove('color_animation_end');
    element.classList.add('animate__animated', 'animate__fadeOutDown')

    element.addEventListener('animationend', () => {
      element.classList.remove('animate__animated', 'animate__fadeOutDown')
      element.classList.add('color_animation_end');
    })
  }

  sol() {
    this.nativeAudio.play('sol', () => console.log('Sol'))
    this.note="Sol";
    const element = document.querySelector('.anime_note');
    element.classList.remove('color_animation_end');
    element.classList.add('animate__animated', 'animate__fadeOutDown')

    element.addEventListener('animationend', () => {
      element.classList.remove('animate__animated', 'animate__fadeOutDown')
      element.classList.add('color_animation_end');
    })
  }

  la() {
    this.nativeAudio.play('la', () => console.log('Lá'))
    this.note="Lá";
    const element = document.querySelector('.anime_note');
    element.classList.remove('color_animation_end');
    element.classList.add('animate__animated', 'animate__fadeOutDown')

    element.addEventListener('animationend', () => {
      element.classList.remove('animate__animated', 'animate__fadeOutDown')
      element.classList.add('color_animation_end');
    })
  }

  si() {
    this.nativeAudio.play('si', () => console.log('Si'))
    this.note="Si";
    const element = document.querySelector('.anime_note');
    element.classList.remove('color_animation_end');
    element.classList.add('animate__animated', 'animate__fadeOutDown')

    element.addEventListener('animationend', () => {
      element.classList.remove('animate__animated', 'animate__fadeOutDown')
      element.classList.add('color_animation_end');
    })
  }

  doOctave() {
    this.nativeAudio.play('doOctave', () => console.log('Do Octave'))
    this.note="Dó";
    const element = document.querySelector('.anime_note');
    element.classList.remove('color_animation_end');
    element.classList.add('animate__animated', 'animate__fadeOutDown')

    element.addEventListener('animationend', () => {
      element.classList.remove('animate__animated', 'animate__fadeOutDown')
      element.classList.add('color_animation_end');
    })
  }

  

}
