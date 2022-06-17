import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { Animal } from './animal';
import { Fruit_Veg } from './fruit&veg';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private dataManager : DataManagerService){}
  animals : Array<Animal> = [];
  fruits_vegs : Array<Fruit_Veg> = [];
  type : String = "";
  private liveGetRequestAnimal : any;
  private liveGetRequestFruit_veg : any;
  ngOnInit(): void {
    // requesting to get data
   this.liveGetRequestAnimal = this.dataManager.getAnimalData()
  .subscribe((data)=>{
    this.animals = data;
  })

  this.liveGetRequestFruit_veg = this.dataManager.getFruit_VegData()
  .subscribe((data)=>{
    this.fruits_vegs = data;
  })

  this.type = "animal";
  }


  handleHeaderButton(name : string)
  {
   switch(name)
   {
    case "fruit_veg" :
      this.type = "fruit_veg";
    break;
    case "animal" :
      this.type = "animal";
    break;
   }
  }

  ngOnDestroy(){
    this.liveGetRequestAnimal.unsubscribe();
    this.liveGetRequestFruit_veg.unsubscribe();
  }
}
