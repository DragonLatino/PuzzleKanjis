import { Component } from '@angular/core';
import { PuzzleService } from '../puzzle/puzzle.service';
import { Router } from '@angular/router';

@Component({
	selector: 'home-menu',
	styleUrls: ['./home-menu.style.css', '../puzzle/puzzle.style.css'],
	templateUrl: './home-menu.view.html'
})
export class HomeMenuComponent{

	constructor(private puzzleService: PuzzleService, private router: Router){
	}

	goToLesson (lesson) {
		this.puzzleService.setLesson(lesson);
		this.router.navigate(['puzzle']);
	}
}