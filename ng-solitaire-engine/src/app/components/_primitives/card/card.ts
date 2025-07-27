import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CardModel, CardSuit } from '../../../models/card/card-model';

@Component({
  selector: 'se-card',
  imports: [
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card implements OnInit, AfterViewInit{
  
  private model: CardModel = new CardModel();

  @Input() set cardmodel(value: CardModel) {
    this.model = value;
  }

  @ViewChild('cardcanvas') cardcanvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.model);
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngAfterViewInit(): void {
    this.ctx = this.cardcanvas.nativeElement.getContext('2d')!;
    this.drawCanvas();
  }

  private drawCanvas() {
    if (this.model.isFaceDown()) {
      var grd = this.ctx.createLinearGradient(0, 0, 100, 100);
      grd.addColorStop(0, "#550000");
      grd.addColorStop(1, "#200000");
      this.ctx.fillStyle = grd;
      this.ctx.fillRect(0,0,60,90);
    }
    else {
      this.ctx.beginPath();
      this.ctx.arc(30,45,15,0,2*Math.PI);
      this.ctx.fillStyle = this.getColorByCardValue()!;
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "#000000";
      this.ctx.fillText(this.model.getNumber().toString(), 5, 20);
    }
    
  }

  private getColorByCardValue() : string {
    try {
      console.log(this.model.getSuit());
      switch (this.model.getSuit()) {
        case CardSuit.Diamonds:
          return '#cc7700';
        case CardSuit.Spades:
          return '#0000dd';
        case CardSuit.Hearts:
          return '#ee0000';
        case CardSuit.Clubs:
          return '#000033';
      }  
    } catch (error) {
      console.error(error);
      return "ffffff";
    }
    
  }
}
