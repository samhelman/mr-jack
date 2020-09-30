import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainMenuContainerComponent } from './main-menu-container/main-menu-container.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameMenuComponent } from './game-menu/game-menu.component';
import { NewGameMenuComponent } from './new-game-menu/new-game-menu.component';
import { GameIdMenuComponent } from './game-id-menu/game-id-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { TitleComponent } from './title/title.component';
import { GameContainerComponent } from './game-container/game-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuContainerComponent,
    MenuContainerComponent,
    MainMenuComponent,
    GameMenuComponent,
    NewGameMenuComponent,
    GameIdMenuComponent,
    TitleComponent,
    GameContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
