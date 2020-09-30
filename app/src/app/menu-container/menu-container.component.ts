import { Component, OnInit } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent implements OnInit {

  public child = 'main-menu';
  public type: string;

  constructor() { }

  ngOnInit(): void {
  }

  updateMenu(object:object) {
    this.child = object['menu'];
    this.type = object['type'];
  }

}
