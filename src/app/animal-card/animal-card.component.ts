import { Fruit_Veg } from './../fruit&veg';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal';
@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent implements OnInit {

  constructor() { }
  //sending event to parent when is hovered and hover is finished
  @Output() cardOnHover = new EventEmitter()
  @Output() cardHoverFinished = new EventEmitter();

  //getting animal information for card
  @Input() animalItem : Animal = {} as Animal;
  @Input() fruit_vegItem : Fruit_Veg = {} as Fruit_Veg;
  @Input() type : String = "";
  ngOnInit(): void {
  }
   //when card is hovered
  hovered(id: number){
   this.cardOnHover.emit(id);
  }

  //when hover is finished
  hoveredFinished()
  {
    this.cardHoverFinished.emit();
  }
}
