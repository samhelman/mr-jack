import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @Input() menu: string;
  @Input() type: string;
  @Output() menuChange = new EventEmitter<{menu:string, type:string}>();

  public fadeOut = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateMenu(menu:string, type:string) {
    this.menu = menu;
    this.type = type;
    this.fadeOut = true;
    setTimeout(() => this.menuChange.emit({menu:this.menu, type:this.type}), 600)
    }
}
