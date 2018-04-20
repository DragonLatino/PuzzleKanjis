import { Component } from '@angular/core';
import { PuzzleService } from '../puzzle/puzzle.service';
import { Router } from '@angular/router';

@Component({
	selector: 'home-menu',
	styleUrls: ['./home-menu.style.css', '../puzzle/puzzle.style.css'],
	templateUrl: './home-menu.view.html'
})
export class HomeMenuComponent{
	currentPuzzle16;
	currentPuzzle17;
	randomLesson = 0;
	punishText = '';
	punishes = [
		'Hacer 5 sentadilla',
		'Pararse de un pie 1 minuto',
		'Imitar un animal',
		'Declararse a alguien',
		'Bailar gangnam style'];
	constructor(private puzzleService: PuzzleService, private router: Router){
		this.puzzleService.setLesson(16);
		this.currentPuzzle16 = this.puzzleService.getCurrentPuzzle(false);
		this.puzzleService.setLesson(17);
		this.currentPuzzle17 = this.puzzleService.getCurrentPuzzle(false);
	}

	goToLesson (lesson) {
		this.puzzleService.setLesson(lesson);
		this.router.navigate(['puzzle']);
	}

	selectedRandom () {
		this.randomLesson = Math.floor(Math.random() * 6) + 13;
	}

	selectedRandomPunish () {
		this.punishText = this.punishes[Math.floor(Math.random() * 4)];
	}
}
