import { Component, OnInit } from '@angular/core';
import { Characters } from './type';








@Component({
  selector: 'app-character-box',
  templateUrl: './character-box.component.html',
  styleUrls: ['./character-box.component.css']
})
export class CharacterBoxComponent implements OnInit {

  constructor() { }
  characters: Characters[]=[]
  ngOnInit() {
    fetch(`https://breakingbadapi.com/api/characters`)
    .then(res=>res.json()).then(res=>this.characters=res)
  }
  getStatus(character: Characters){
    if (character.status=="Presumed dead") return "red";
    if (character.status=="Alive") return "green";
    return "black";
  }
 
}
