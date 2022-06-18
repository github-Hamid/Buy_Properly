import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 //sending event to parent when button is clicked
 @Output() buttonCilcked = new EventEmitter();
 @Input() type: String="";

  ngOnInit(): void {
  }

  btnClicked(name: String)
  {
    this.buttonCilcked.emit(name);
  }

  menuIconClicked()
  {
    let sideMenu = document.getElementById("side_menu");
    sideMenu?.style.setProperty("right" , "0")
  }

  navigateIconClicked()
  {
    let sideMenu = document.getElementById("side_menu");
    sideMenu?.style.setProperty("right" , "-151px")
  }

}
