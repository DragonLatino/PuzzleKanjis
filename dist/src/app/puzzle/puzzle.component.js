"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var puzzle_service_1 = require("./puzzle.service");
var PuzzleComponent = /** @class */ (function () {
    function PuzzleComponent(cdRef, puzzleService) {
        this.cdRef = cdRef;
        this.puzzleService = puzzleService;
        this.currentSelected = 0;
        this.currentPuzzle = 0;
        this.isReady = false;
        this.solvedPuzzle = false;
        this.puzzles = puzzleService.getPuzzles();
    }
    PuzzleComponent.prototype.initial = function () {
        var _this = this;
        this.isReady = true;
        this.cdRef.detectChanges();
        this.puzzle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.randomPuzzle();
        this.checkPieces();
        if (this.correctPieces === 16) {
            this.initial();
            return;
        }
        this.currentNamePuzzle = this.puzzles[this.currentPuzzle].name;
        for (var k = 0; k < 16; k++) {
            document.getElementById('puzzle' + (k + 1)).style.background =
                'url(/app/images/' + this.currentNamePuzzle + this.puzzle[k] + '.jpg) no-repeat';
        }
        this.seconds = 60;
        this.timer = Rx_1.Observable.timer(0, 1000);
        this.sub = this.timer.subscribe(function (t) { return _this.updateTime(); });
    };
    PuzzleComponent.prototype.updateTime = function () {
        this.seconds--;
        if (this.seconds === 0) {
            this.sub.unsubscribe();
            alert('Perdiste');
        }
    };
    PuzzleComponent.prototype.randomPuzzle = function () {
        var index, index2, aux;
        for (var k = 0; k < 1000; k++) {
            index = Math.floor(Math.random() * 16);
            index2 = Math.floor(Math.random() * 16);
            aux = this.puzzle[index];
            this.puzzle[index] = this.puzzle[index2];
            this.puzzle[index2] = aux;
        }
    };
    PuzzleComponent.prototype.checkPieces = function () {
        this.correctPieces = 0;
        for (var k = 0; k < 16; k++) {
            if (this.puzzle[k] === k + 1) {
                this.correctPieces++;
            }
        }
    };
    PuzzleComponent.prototype.selectOption = function (isCorrect) {
        if (isCorrect) {
            alert('Ganaste');
        }
        else {
            alert('Perdiste');
        }
        this.sub.unsubscribe();
    };
    PuzzleComponent.prototype.selectP = function (button) {
        var aux;
        if (button === this.currentSelected) {
            this.currentSelected = 0;
            document.getElementById('puzzle' + button).style.border = 'none';
        }
        else if (this.currentSelected === 0) {
            this.currentSelected = button;
            document.getElementById('puzzle' + button).style.border = '2px solid blue';
        }
        else {
            document.getElementById('puzzle' + this.currentSelected).style.border = 'none';
            aux = document.getElementById('puzzle' + button).style.background;
            document.getElementById('puzzle' + button).style.background =
                document.getElementById('puzzle' + this.currentSelected).style.background;
            document.getElementById('puzzle' + this.currentSelected).style.background = aux;
            aux = this.puzzle[button - 1];
            this.puzzle[button - 1] = this.puzzle[this.currentSelected - 1];
            this.puzzle[this.currentSelected - 1] = aux;
            this.currentSelected = 0;
            this.checkPieces();
            if (this.correctPieces === 16) {
                this.solvedPuzzle = true;
            }
        }
    };
    PuzzleComponent = __decorate([
        core_1.Component({
            selector: 'puzzle',
            styleUrls: ['./puzzle.style.css'],
            templateUrl: './puzzle.view.html'
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, puzzle_service_1.PuzzleService])
    ], PuzzleComponent);
    return PuzzleComponent;
}());
exports.PuzzleComponent = PuzzleComponent;
//# sourceMappingURL=puzzle.component.js.map