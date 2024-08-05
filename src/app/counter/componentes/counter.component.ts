import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>hola Counter</h1>

<h3> Counter: {{counter}}</h3>
    <button (click)="incrementarEn(1)">+1</button>
    <button (click)="incrementarEn(2)">+2</button>
    <button (click)="reset()">Reset</button>
    `
})
export class CounterComponent {
  constructor() { }


  public counter: number=20;
  public incrementarEn(valor:number):void{
    this.counter+=valor;
  }
  public reset():void{
    this.counter=10;
  }

}
