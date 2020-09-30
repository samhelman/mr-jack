import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-id-menu',
  templateUrl: './game-id-menu.component.html',
  styleUrls: ['./game-id-menu.component.css']
})
export class GameIdMenuComponent implements OnInit {

  public errors = ['errors'];

  constructor() { }

  ngOnInit(): void {
  }

  addError(error:string) {
    this.errors.push(error);
  }

  clearErrors() {
    this.errors = [];
  }

}
