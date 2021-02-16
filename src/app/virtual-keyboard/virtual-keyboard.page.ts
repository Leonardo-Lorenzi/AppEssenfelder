import { Component, OnInit } from '@angular/core';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

import { instrument } from 'soundfont-player';

import { Howl, Howler } from 'howler';
import { createAnimation, Animation } from '@ionic/core';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.page.html',
  styleUrls: ['./virtual-keyboard.page.scss'],
})
export class VirtualKeyboardPage implements OnInit {

  player: Howl = null;

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
    //this.nativeAudio.play('do', () => console.log("Dó"))
    /*instrument( new AudioContext(), "electric_piano_1").then(function (electric_piano_1) {
      electric_piano_1.play('C4')
    })*/
    this.player = new Howl ({
      src: ['../../assets/song/do.wav'],
    })
    this.player.play();
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
    //this.nativeAudio.play('re', () => console.log('Ré'))
    /*instrument( new AudioContext(), "electric_piano_1").then(function (electric_piano_1) {
      electric_piano_1.play('D4')
    })*/
    this.player = new Howl ({
      src: ['../../assets/song/re.wav'],
    })
    this.player.play();
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
    //this.nativeAudio.play('mi', () => console.log('Mi'))
    /*instrument( new AudioContext(), "electric_piano_1").then(function (electric_piano_1) {
      electric_piano_1.play('E4')
    })*/
    this.player = new Howl ({
      src: ['../../assets/song/mi.wav'],
    })
    this.player.play();
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
    //this.nativeAudio.play('fa', () => console.log('Fá'))
    /*instrument( new AudioContext(), "electric_piano_1").then(function (electric_piano_1) {
      electric_piano_1.play('F4')
    })*/
    this.player = new Howl ({
      src: ['../../assets/song/fa.wav'],
    })
    this.player.play();
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
    //this.nativeAudio.play('sol', () => console.log('Sol'))
    /*instrument( new AudioContext(), "electric_piano_1").then(function (electric_piano_1) {
      electric_piano_1.play('G4')
    })*/
    this.player = new Howl ({
      src: ['../../assets/song/sol.wav'],
    })
    this.player.play();
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
    //this.nativeAudio.play('la', () => console.log('Lá'))
    /*instrument( new AudioContext(), "electric_piano_1").then(function (electric_piano_1) {
      electric_piano_1.play('A4')
    })*/
    this.player = new Howl ({
      src: ['../../assets/song/la.wav'],
    })
    this.player.play();
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
    //this.nativeAudio.play('si', () => console.log('Si'))
    /*instrument( new AudioContext(), "electric_piano_1").then(function (electric_piano_1) {
      electric_piano_1.play('B4')
    })*/
    this.player = new Howl ({
      src: ['../../assets/song/si.wav'],
    })
    this.player.play();
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
