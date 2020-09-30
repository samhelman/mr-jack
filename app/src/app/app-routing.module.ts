import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameContainerComponent } from './game-container/game-container.component';
import { GameIdMenuComponent } from './game-id-menu/game-id-menu.component';
import { GameMenuComponent } from './game-menu/game-menu.component';
import { MainMenuContainerComponent } from './main-menu-container/main-menu-container.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


const routes: Routes = [
  { path: '', component: MainMenuContainerComponent },
  { path: 'game', component: GameContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }