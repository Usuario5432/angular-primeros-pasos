import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    @Input('characterList')
    public characterList: Character[] = [{
      name:'wii',
      power:10
    }]
    @Input()
    public titulo:string="";
}
