import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './animal';
import { Fruit_Veg } from './fruit&veg';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http : HttpClient) { }

  getAnimalData() : Observable<Animal[]> {
    return this.http.get<Animal[]>("https://raw.githubusercontent.com/BuyProperly/interview/main/photos/animals.json")
  }

  getFruit_VegData() : Observable<Fruit_Veg[]> {
    return this.http.get<Fruit_Veg[]>("https://raw.githubusercontent.com/BuyProperly/interview/main/photos/fruitveg.json")
  }
}
