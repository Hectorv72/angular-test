import { Component } from '@angular/core';

@Component({
  selector: 'segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})

export class SegundoComponenteComponent {
  public name: any;
  constructor() {
    this.name = "probando"
  }

  onClickAlert(): void {
    alert('Clicked')
  }

  onGetMessage(evento: string): void {
    alert(evento)
  }

}
