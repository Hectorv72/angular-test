import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  public name: string;
  public age: number;
  public users: Array<string>

  constructor() {
    this.name = "Angular test";
    this.age = 18;
    this.users = ['Hector', 'Daniel', 'Valdez']
  }

  addAge(): void {
    this.age++;
  }

  lessAge(): void {
    this.age--;
  }

  ngOnInit(): void {
  }
}
