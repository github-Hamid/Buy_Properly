import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 //sending event to parent when button is clicked
 @Output() buttonCilcked = new EventEmitter();

  ngOnInit(): void {
  }

  btnClicked(name: String)
  {
    this.buttonCilcked.emit(name);
  }

}
