import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from '../app/components/_primitives/card/card';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Card
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor () {

  }

  protected title = 'ng-solitaire-engine';
}
