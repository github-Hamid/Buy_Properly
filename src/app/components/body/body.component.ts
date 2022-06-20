import { Animal } from '../../core/animal';
import { Component, Input } from '@angular/core';
import { Fruit_Veg } from '../../core/fruit&veg';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  constructor() {}

  // getting data from parent
  @Input() animals: Array<Animal> = [];
  @Input() fruits_vegs: Array<Fruit_Veg> = [];
  @Input() type: String = '';

  handleHovered(id: number) {
    //selecting all cards except the on is hovered
    document
      .querySelectorAll<HTMLElement>(`.card:not([id="${id}"])`)
      .forEach((card) => {
        card.style.opacity = '0.6';
      });
  }

  handleHoverFinished() {
    //selecting all cards and make opacity to 1
    document.querySelectorAll<HTMLElement>('.card').forEach((card) => {
      card.style.opacity = '1';
    });
  }
}
