import { Fruit_Veg } from '../fruit&veg';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal';
import { SendMessageService } from '../send-message.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class AnimalCardComponent implements OnInit {

  constructor(private message : SendMessageService) { }
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

  //clicking on card and sending id from nested child to its parent by send message service
  cardClicked(object : Object)
  {
    if(this.type == "animal")
      this.message.sendMessage(this.animalItem);
      else
      this.message.sendMessage(this.fruit_vegItem);
  }
}
