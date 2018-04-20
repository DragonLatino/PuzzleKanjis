import { Routes } from '@angular/router';

import { PuzzleComponent } from './puzzle/puzzle.component';
import { HomeMenuComponent } from './home-menu/home-menu.component'

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home-menu', pathMatch: 'full' },
  { path: 'puzzle', component: PuzzleComponent },
  { path: 'home-menu', component: HomeMenuComponent }
];