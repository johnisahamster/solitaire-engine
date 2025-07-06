import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gameboard } from './gameboard/gameboard';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Gameboard
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor () {

  }

  protected title = 'ng-solitaire-engine';
}
