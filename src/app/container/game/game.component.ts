import {Component, OnInit} from '@angular/core';
import {GameStateService} from '../../services/game-state.service';
import {COLORS} from '../../model/colors.enum';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private colors: COLORS;

  constructor(private simonSrv: GameStateService) {
  }

  ngOnInit() {

    console.log(this.simonSrv.generateSimon());
  }


  onSimonGuss(color: COLORS) {
debugger
  }
}
