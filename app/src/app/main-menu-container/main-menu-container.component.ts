import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu-container',
  templateUrl: './main-menu-container.component.html',
  styleUrls: ['./main-menu-container.component.css']
})
export class MainMenuContainerComponent implements OnInit {

  public title = 'Mr Jack';

  constructor() { }

  ngOnInit(): void {
  }

}
