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
var PuzzleService = /** @class */ (function () {
    function PuzzleService() {
        this.puzzles = [{
                name: 'kanji-joven',
                kun: 'わか(い)',
                on: 'シャク ニャク',
                options: [{
                        text: 'Corto',
                        isCorrect: false
                    }, {
                        text: 'Nuevo',
                        isCorrect: false
                    }, {
                        text: 'Jóven',
                        isCorrect: true
                    }, {
                        text: 'Viejo',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-corto',
                kun: 'みじか(い)',
                on: 'シャク ニャク',
                options: [{
                        text: 'Largo',
                        isCorrect: false
                    }, {
                        text: 'Corto',
                        isCorrect: true
                    }, {
                        text: 'Alto',
                        isCorrect: false
                    }, {
                        text: 'Nuevo',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-brillante',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Brillante',
                        isCorrect: true
                    }, {
                        text: 'Oscuro',
                        isCorrect: false
                    }, {
                        text: 'Blanco',
                        isCorrect: false
                    }, {
                        text: 'Amplio',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-cabeza',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Cabeza',
                        isCorrect: true
                    }, {
                        text: 'Cuerpo',
                        isCorrect: false
                    }, {
                        text: 'Boca',
                        isCorrect: false
                    }, {
                        text: 'Cara',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-cabeza',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Cabeza',
                        isCorrect: true
                    }, {
                        text: 'Cuerpo',
                        isCorrect: false
                    }, {
                        text: 'Boca',
                        isCorrect: false
                    }, {
                        text: 'Cara',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-cabeza',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Cabeza',
                        isCorrect: true
                    }, {
                        text: 'Cuerpo',
                        isCorrect: false
                    }, {
                        text: 'Boca',
                        isCorrect: false
                    }, {
                        text: 'Cara',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-cabeza',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Cabeza',
                        isCorrect: true
                    }, {
                        text: 'Cuerpo',
                        isCorrect: false
                    }, {
                        text: 'Boca',
                        isCorrect: false
                    }, {
                        text: 'Cara',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-cabeza',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Cabeza',
                        isCorrect: true
                    }, {
                        text: 'Cuerpo',
                        isCorrect: false
                    }, {
                        text: 'Boca',
                        isCorrect: false
                    }, {
                        text: 'Cara',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-cabeza',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Cabeza',
                        isCorrect: true
                    }, {
                        text: 'Cuerpo',
                        isCorrect: false
                    }, {
                        text: 'Boca',
                        isCorrect: false
                    }, {
                        text: 'Cara',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-cabeza',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Cabeza',
                        isCorrect: true
                    }, {
                        text: 'Cuerpo',
                        isCorrect: false
                    }, {
                        text: 'Boca',
                        isCorrect: false
                    }, {
                        text: 'Cara',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-cabeza',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Cabeza',
                        isCorrect: true
                    }, {
                        text: 'Cuerpo',
                        isCorrect: false
                    }, {
                        text: 'Boca',
                        isCorrect: false
                    }, {
                        text: 'Cara',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-cabeza',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Cabeza',
                        isCorrect: true
                    }, {
                        text: 'Cuerpo',
                        isCorrect: false
                    }, {
                        text: 'Boca',
                        isCorrect: false
                    }, {
                        text: 'Cara',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-cabeza',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Cabeza',
                        isCorrect: true
                    }, {
                        text: 'Cuerpo',
                        isCorrect: false
                    }, {
                        text: 'Boca',
                        isCorrect: false
                    }, {
                        text: 'Cara',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-cabeza',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Cabeza',
                        isCorrect: true
                    }, {
                        text: 'Cuerpo',
                        isCorrect: false
                    }, {
                        text: 'Boca',
                        isCorrect: false
                    }, {
                        text: 'Cara',
                        isCorrect: false
                    }]
            }, {
                name: 'kanji-cabeza',
                kun: 'あたま',
                on: 'ズ ト トウ',
                options: [{
                        text: 'Cabeza',
                        isCorrect: true
                    }, {
                        text: 'Cuerpo',
                        isCorrect: false
                    }, {
                        text: 'Boca',
                        isCorrect: false
                    }, {
                        text: 'Cara',
                        isCorrect: false
                    }]
            },];
    }
    PuzzleService.prototype.getPuzzles = function () {
        return this.puzzles;
    };
    PuzzleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PuzzleService);
    return PuzzleService;
}());
exports.PuzzleService = PuzzleService;
//# sourceMappingURL=puzzle.service.js.map