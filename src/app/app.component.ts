import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataManagerService } from './core/services/data-manager.service';
import { Animal } from './core/animal';
import { Fruit_Veg } from './core/fruit&veg';
import { Subscription } from 'rxjs';
import { SendMessageService } from './core/services/send-message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  animals: Array<Animal> = [];
  fruits_vegs: Array<Fruit_Veg> = [];
  type: String = '';
  private liveGetRequestAnimal: any;
  private liveGetRequestFruit_veg: any;
  subscription: Subscription;
  object: any = null;

  constructor(
    private dataManager: DataManagerService,
    private message: SendMessageService
  ) {
    //getting the message from nested child by send message service
    this.subscription = this.message.getMessage().subscribe((object) => {
      //assigning the object to the received object
      this.object = object.obj;
      let modal = document.getElementById('modal');
      let container = document.getElementById('main_container');

      //set modal display to block
      modal?.style.setProperty('display', 'block');
      container?.style.setProperty('overflow', 'hidden');
    });
  }

  ngOnInit(): void {
    // requesting to get all animals data
    this.liveGetRequestAnimal = this.dataManager
      .getAnimalData()
      .subscribe((data) => {
        console.log('data:', data);
        this.animals = data;
      });

    //requesting to get all fruits & vegs data
    this.liveGetRequestFruit_veg = this.dataManager
      .getFruit_VegData()
      .subscribe((data) => {
        this.fruits_vegs = data;
      });

    // defining default type as animal
    this.type = 'animal';

    //adding event listener to window for closing the modal
    window.addEventListener('click', function (e) {
      let modal = this.document.getElementById('modal');
      if (modal?.style.display == 'block' && e.target == modal) {
        //setting modal display to none
        modal.style.setProperty('display', 'none');
      }
    });
  }

  // handling buttons in header section
  handleHeaderButton(name: string) {
    switch (name) {
      case 'fruit_veg':
        this.type = 'fruit_veg';
        break;
      case 'animal':
        this.type = 'animal';
        break;
    }
  }

  ngOnDestroy() {
    this.liveGetRequestAnimal.unsubscribe();
    this.liveGetRequestFruit_veg.unsubscribe();
    this.subscription.unsubscribe();
  }
}
