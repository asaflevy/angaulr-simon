import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './container/game/game.component';
import { SimonButtonComponent } from './components/simon-button/simon-button.component';
import {GameStateService} from './services/game-state.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SimonButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
