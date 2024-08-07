import { Character } from './../interfaces/character.interface';

import { v4 as uuid} from 'uuid';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters:Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power: 9500
  },{
    id: uuid(),
    name:'Vegeta',
    power: 9500
  }];

  public addCharacter(character:Character):void{
    const newCharacter: Character ={
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);
    console.table(this.characters);
  }

  //public onDeleteId(indice:number){
  public onDeleteCharacterById(id:string):void{
    //this.characters.splice(indice,1);
    this.characters=this.characters.filter(character=>character.id!==id);
  }

}
