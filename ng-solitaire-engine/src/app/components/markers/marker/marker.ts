import { 
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild 
} from '@angular/core';

@Component({
  selector: 'se-marker',
  imports: [],
  templateUrl: './marker.html',
  styleUrl: './marker.scss'
})
export class Marker {
  private number_value: number = 0;

  @Input() set value(value: number) {
    this.number_value = value;
  }

  @ViewChild('markercanvas') markercanvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit(): void {
    //console.log(this.model);
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit(): void {
    this.ctx = this.markercanvas.nativeElement.getContext('2d')!;
    this.drawCanvas();
  }

  private drawCanvas() {
      this.ctx.font = '18px Arial';
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fillText(this.number_value.toString(), 8, 20);
  }
}
