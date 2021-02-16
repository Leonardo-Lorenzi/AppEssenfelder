import { Component, OnInit } from '@angular/core';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.page.html',
  styleUrls: ['./metronome.page.scss'],
})
export class MetronomePage implements OnInit {

  constructor(private nativeAudio: NativeAudio) { }

  player: Howl = null;
  isPlaying = false;


  ngOnInit() {
    this.nativeAudio.preloadComplex('metronome', '../../assets/song/metronome.wav', 1, 1, 5)
  }

  rangeChange(event: any) {
    console.log(event.detail.value)
  }

  startMetronome() {
    this.nativeAudio.play('metronome', () => console.log("start"));
    this.nativeAudio.loop('metronome');
    /*let x = setTimeout (function() {
      if (this.player) {
        this.player.stop();
      }
      this.player = new Howl ({
        src: ['../../assets/song/metronome.wav'],
        autoplay: true,
        loop: true,

        onplay: () => {
          this.isPlaying = true;
        },
        onend: () => {

        }
      });
      //this.player.play();
    }, 0)*/
    
  }

  pauseMetronome() {
    this.nativeAudio.stop('metronome');
    //this.player.pause()
    //this.player.pause();
  }

}
