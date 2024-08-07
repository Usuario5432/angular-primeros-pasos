import { Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
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

    @Output()
    public onDeleteById: EventEmitter<string>=new EventEmitter();

    public onDeleteCharacterById(id:string):void{
      this.onDeleteById.emit(id);
    }


}
