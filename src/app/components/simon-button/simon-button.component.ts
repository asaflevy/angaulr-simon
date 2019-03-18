import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {COLORS} from '../../model/colors.enum';

@Component({
  selector: 'app-simon-button',
  templateUrl: './simon-button.component.html',
  styleUrls: ['./simon-button.component.scss']
})
export class SimonButtonComponent implements OnInit {

  buttonColor: string;
  @Input() color: COLORS;
  @Output() onColorClick = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.buttonColor = COLORS[this.color]; // "A"
  }

  onColorButtonClick() {
    this.onColorClick.emit(this.color);
  }

}
