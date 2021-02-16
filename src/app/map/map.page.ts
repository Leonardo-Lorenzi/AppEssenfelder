import { Component, OnInit } from '@angular/core';

//import { Player } from 'midi-player-js';

import { instrument } from 'soundfont-player'; 


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  //player: Player;

  constructor() { }

  ngOnInit() {

  }

  startMusic() {
    //this.player.loadFile('../../assets/song/midTeste.mid')
    //this.player.play();
    instrument( new AudioContext(), "electric_piano_1").then(function (electric_piano_1) {
      electric_piano_1.play('C4')
    })
  }

}