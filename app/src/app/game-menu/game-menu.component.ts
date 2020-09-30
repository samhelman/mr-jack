import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.css']
})
export class GameMenuComponent implements OnInit {

  @Input() menu: string;
  @Input() type: string;
  @Output() menuChange = new EventEmitter<object>();

  public fadeOut = false;

  constructor() { }

  ngOnInit(): void {
  }

  goBack() {
    this.fadeOut = true;
    setTimeout(() => this.menuChange.emit({menu: 'main-menu'}), 600)
  }

  startGame() {
    console.log("Game started");
  }
}
