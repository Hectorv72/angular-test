import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  @Input() public hello: string = "Hola mundo";
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngDestroy(): void { }

  onClickEmit(): void {
    this.mensajeEmitter.emit('Hola, probando mensaje')
  }
}
