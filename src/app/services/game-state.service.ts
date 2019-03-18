import {Injectable} from '@angular/core';
import {COLORS} from '../model/colors.enum';
import {START_COUNT} from '../model/constants';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  simon: COLORS[] = [];
  player: COLORS[] = [];
  count: number;

  constructor() {
    this.count = START_COUNT;
  }

  private get randomColor() {
    return Math.floor(Math.random() * 4) as COLORS;
  }

  appendSimon(increment = false) {
    if (increment) {
      this.count++;
    }
    return this.simon.push(this.randomColor);
  }


  generateSimon(): COLORS[] {
    for (let i = 0; i <= this.count; i++) {
      this.appendSimon();
    }
    return this.simon;
  }

  restartSimon() {
    this.count = START_COUNT;
    this.player.length = 0;
    this.generateSimon();
  }

  playerGuss(val: COLORS) {
    this.player.push(val);
    if (!this.compareSimon()) {
      this.player = [];
    }
  }

  compareSimon(): boolean {
    this.player.forEach((d, i) => {
      if (this.simon[i] !== d) {
        return false;
      }
    })
    return true;
  }
}
