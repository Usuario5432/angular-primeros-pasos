import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Yo','Tu','El','Nosotros'];
  public heroeEliminado?: string;

  removeLastHero(): void{
    this.heroeEliminado=this.heroNames.pop();
    console.log(this.heroeEliminado);
  }
}
