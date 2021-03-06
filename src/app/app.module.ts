import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeMenuComponent } from './home-menu/home-menu.component';

import { PuzzleComponent } from './puzzle/puzzle.component';
import { PuzzleService } from './puzzle/puzzle.service';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleComponent,
    HomeMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    PuzzleService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
