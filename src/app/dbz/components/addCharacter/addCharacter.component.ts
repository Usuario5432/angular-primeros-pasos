import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: 'addCharacter.component.html'
})

export class AddCharacterComponent{

  @Output()
  public onNewCharacter: EventEmitter<Character>=new EventEmitter();


  public character: Character={
    name: '',
    power:0
  };

  public emitCharacter():void{

    if(this.character.name.length===0) return;
    console.log("Voy a emitir");
    this.onNewCharacter.emit(this.character);
    console.log("Emitido");
    this.character={name:'',power:0};
  }
}
