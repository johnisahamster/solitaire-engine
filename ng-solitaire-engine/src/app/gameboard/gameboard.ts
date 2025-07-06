import { Component } from '@angular/core';
import { Card } from '../components/_primitives/card/card';
import { Railroad } from '../components/stacks/railroads/railroad/railroad';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';

@Component({
  selector: 'se-gameboard',
  imports: [
    Railroad,
    Card,
    CdkDropListGroup
  ],
  templateUrl: './gameboard.html',
  styleUrl: './gameboard.scss'
})
export class Gameboard {

}
