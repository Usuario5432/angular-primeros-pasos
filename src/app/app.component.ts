import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title:string = 'hola mundo';
  public counter: number=20;

  public incrementarEn(valor:number):void{
    this.counter+=valor;
  }
  public reset():void{
    this.counter=10;
  }
}
