import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  //sending event to parent when button is clicked
  @Output() buttonCilcked = new EventEmitter();
  @Input() type: String = '';

  ngOnInit(): void {}

  //naviagating to UI page
  navigateToUI() {
    this.router.navigateByUrl('/ui');
  }

  //sending message to parent that button is clicked
  btnClicked(name: String) {
    this.buttonCilcked.emit(name);
  }

  //showing the items in menu by clcicking on menu icon
  menuIconClicked() {
    let sideMenu = document.getElementById('side_menu');
    sideMenu?.style.setProperty('right', '0');
  }

  //hiding the items in menu by clcickiong on navigation icon
  navigateIconClicked() {
    let sideMenu = document.getElementById('side_menu');
    sideMenu?.style.setProperty('right', '-151px');
  }
}
