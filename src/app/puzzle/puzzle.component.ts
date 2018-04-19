import { Component, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { PuzzleService } from './puzzle.service';

@Component({
	selector: 'puzzle',
	styleUrls: ['./puzzle.style.css'],
	templateUrl: './puzzle.view.html'
})
export class PuzzleComponent{
	private timer;
	private sub: Subscription;
	puzzle;
	puzzles;
	currentSelected = 0;
	currentPuzzle = -1;
	currentNamePuzzle : String;
	correctPieces : number;
	isReady = false;
	seconds: number;
	solvedPuzzle = false;

	constructor(private cdRef: ChangeDetectorRef, private puzzleService: PuzzleService){
		this.puzzles = puzzleService.getPuzzles();
	}

	initial(){
		if (this.seconds > 0) {
			this.sub.unsubscribe();
		}
		this.currentPuzzle++;
		this.solvedPuzzle = false;
		this.isReady = true;
		this.cdRef.detectChanges();
		this.puzzle = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
		this.randomPuzzle();
		this.checkPieces();
		if (this.correctPieces === 16) {
			this.initial();
			return;
		}
		this.currentNamePuzzle = this.puzzles[this.currentPuzzle].name;
		for (var k = 0; k < 16; k++) {
			document.getElementById('puzzle' + (k+1)).style.background =
				'url(/app/images/' + this.currentNamePuzzle + this.puzzle[k] + '.jpg) no-repeat';
		}
		this.seconds = 75;
		this.timer = Observable.timer(0, 1000);
  		this.sub = this.timer.subscribe(t => this.updateTime());
	}

	updateTime() {
		this.seconds--;
		if (this.seconds === 0) {
			this.sub.unsubscribe();
			alert('Perdiste');
		}
	}

	randomPuzzle() {
		var index, index2, aux;
		for (var k = 0; k < 1000; k++) {
			index = Math.floor(Math.random() * 16);
			index2 = Math.floor(Math.random() * 16);
			aux = this.puzzle[index];
			this.puzzle[index] = this.puzzle[index2];
			this.puzzle[index2] = aux;
		}
	}

	checkPieces() {
		this.correctPieces = 0;
		for (var k = 0; k < 16; k++) {
			if (this.puzzle[k] === k + 1) {
				this.correctPieces++;
			} else if (this.puzzles[this.currentPuzzle].name === 'kanjis/ojo/kanji-ojo') {
				if ((k === 4 && this.puzzle[k] === 9) || (k === 8 && this.puzzle[k] === 5) ||
					(k === 5 && this.puzzle[k] === 10) || (k === 9 && this.puzzle[k] === 6) ||
					(k === 6 && this.puzzle[k] === 11) || (k === 10 && this.puzzle[k] === 7) ||
					(k === 7 && this.puzzle[k] === 12) || (k === 11 && this.puzzle[k] === 8)) {
					this.correctPieces++;
				}
			} else if (this.puzzles[this.currentPuzzle].name === 'kanjis/oreja/kanji-oreja') {
				if ((k === 1 && (this.puzzle[k] === 14 || this.puzzle[k] === 16)) ||
					(k === 13 && (this.puzzle[k] === 2 || this.puzzle[k] === 16)) ||
					(k === 15 && (this.puzzle[k] === 2 || this.puzzle[k] === 14))) {
					this.correctPieces++;
				}
			} else if (this.puzzles[this.currentPuzzle].name === 'kanjis/pagar/kanji-pagar') {
				if ((k === 12 && this.puzzle[k] === 14) || (k === 13 && this.puzzle[k] === 13)) {
					this.correctPieces++;
				}
			} else if (this.puzzles[this.currentPuzzle].name === 'kanjis/corazon/kanji-corazon') {
				if ((k === 0 && (this.puzzle[k] === 4 || this.puzzle[k] === 13)) ||
					(k === 3 && (this.puzzle[k] === 1 || this.puzzle[k] === 13)) ||
					(k === 12 && (this.puzzle[k] === 1 || this.puzzle[k] === 4))) {
					this.correctPieces++;
				}
			}
		}
	}

	selectOption(isCorrect){
		if (isCorrect) {
			alert('Ganaste');
		} else {
			alert('Perdiste');
		}
		this.sub.unsubscribe();
	}

	selectP(button) {
		var aux;
		if (button === this.currentSelected){
			this.currentSelected = 0;
			document.getElementById('puzzle' + button).style.border = 'none';
		} else if (this.currentSelected === 0) {
			this.currentSelected = button;
			document.getElementById('puzzle' + button).style.border = '2px solid blue';
		} else {
			document.getElementById('puzzle' + this.currentSelected).style.border = 'none';
			aux = document.getElementById('puzzle' + button).style.background;
			document.getElementById('puzzle' + button).style.background = 
				document.getElementById('puzzle' + this.currentSelected).style.background;
			document.getElementById('puzzle' + this.currentSelected).style.background = aux;
			aux = this.puzzle[button-1];
			this.puzzle[button-1] = this.puzzle[this.currentSelected-1];
			this.puzzle[this.currentSelected-1] = aux;
			this.currentSelected = 0;
			this.checkPieces();
			if (this.correctPieces === 16) {
				this.solvedPuzzle = true;
			}
		}
	}
}