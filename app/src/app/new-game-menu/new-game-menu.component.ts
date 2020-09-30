import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-game-menu',
  templateUrl: './new-game-menu.component.html',
  styleUrls: ['./new-game-menu.component.css']
})
export class NewGameMenuComponent implements OnInit {

  public errors = ['error1', 'error2'];
  public selectedPlayer: string;
  public gameId = 'secret code!';

  constructor() { }

  ngOnInit(): void {
    //TODO randomly generate game id
  }

  addError(error:string) {
    this.errors.push(error);
  }

  clearErrors() {
    this.errors = [];
  }

  selectPlayer(selection:string) {
    this.selectedPlayer = selection;
  }
}
