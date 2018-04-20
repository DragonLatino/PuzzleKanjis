import { Injectable } from '@angular/core';

@Injectable()
export class PuzzleService {
	currentLesson = 0;
	currentPuzzle16 = -1;
	currentPuzzle17 = -1;

	puzzlesLesson16 = [{
		name : 'kanjis/joven/kanji-joven',
		kun : 'わか(い)',
		on : 'シャク ニャク',
		options: [{
			text : 'Corto',
			isCorrect: false
		},{
			text : 'Nuevo',
			isCorrect: false
		},{
			text : 'Jóven',
			isCorrect: true
		},{
			text : 'Viejo',
			isCorrect: false
		}]
	},{
		name : 'kanjis/corto/kanji-corto',
		kun : 'みじか(い)',
		on : 'タン',
		options: [{
			text : 'Largo',
			isCorrect: false
		},{
			text : 'Corto',
			isCorrect: true
		},{
			text : 'Alto',
			isCorrect: false
		},{
			text : 'Nuevo',
			isCorrect: false
		}]
	},{
		name : 'kanjis/claro/kanji-claro',
		kun : 'あか(るい)',
		on : 'ナイ ミョウ',
		options: [{
			text : 'Brillante',
			isCorrect: true
		},{
			text : 'Oscuro',
			isCorrect: false
		},{
			text : 'Blanco',
			isCorrect: false
		},{
			text : 'Amplio',
			isCorrect: false
		}]
	},{
		name : 'kanjis/oscuro/kanji-oscuro',
		kun : 'くら(い)',
		on : 'アン',
		options: [{
			text : 'Noche',
			isCorrect: false
		},{
			text : 'Negro',
			isCorrect: false
		},{
			text : 'Alto',
			isCorrect: false
		},{
			text : 'Oscuro',
			isCorrect: true
		}]
	},{
		name : 'kanjis/ojo/kanji-ojo',
		kun : 'め',
		on : 'モク',
		options: [{
			text : 'Oreja',
			isCorrect: false
		},{
			text : 'Ojo',
			isCorrect: true
		},{
			text : 'Concha',
			isCorrect: false
		},{
			text : 'Blanco',
			isCorrect: false
		}]
	},{
		name : 'kanjis/oreja/kanji-oreja',
		kun : 'みみ',
		on : 'ジ',
		options: [{
			text : 'Blanco',
			isCorrect: false
		},{
			text : 'Ojo',
			isCorrect: false
		},{
			text : 'Oreja',
			isCorrect: true
		},{
			text : 'Puerta',
			isCorrect: false
		}]
	},{
		name : 'kanjis/boca/kanji-boca',
		kun : 'くち',
		on : 'コウ',
		options: [{
			text : 'Boca',
			isCorrect: true
		},{
			text : 'Puerta',
			isCorrect: false
		},{
			text : 'Cuatro',
			isCorrect: false
		},{
			text : 'Ojo',
			isCorrect: false
		}]
	},{
		name : 'kanjis/pie/kanji-pie',
		kun : 'あし',
		on : 'ソク',
		options: [{
			text : 'Cuerpo',
			isCorrect: false
		},{
			text : 'Cara',
			isCorrect: false
		},{
			text : 'Cabeza',
			isCorrect: false
		},{
			text : 'Pie',
			isCorrect: true
		}]
	},{
		name : 'kanjis/cuerpo/kanji-cuerpo',
		kun : 'からだ',
		on : 'タイ',
		options: [{
			text : 'Cabeza',
			isCorrect: false
		},{
			text : 'Boca',
			isCorrect: false
		},{
			text : 'Cuerpo',
			isCorrect: true
		},{
			text : 'Cara',
			isCorrect: false
		}]
	},{
		name : 'kanjis/cara/kanji-cara',
		kun : 'かお',
		on : 'ガン',
		options: [{
			text : 'Cabeza',
			isCorrect: false
		},{
			text : 'Cuerpo',
			isCorrect: false
		},{
			text : 'Boca',
			isCorrect: false
		},{
			text : 'Cara',
			isCorrect: true
		}]
	},{
		name : 'kanjis/cabeza/kanji-cabeza',
		kun : 'あたま',
		on : 'ズ ト トウ',
		options: [{
			text : 'Cabeza',
			isCorrect: true
		},{
			text : 'Cara',
			isCorrect: false
		},{
			text : 'Cuerpo',
			isCorrect: false
		},{
			text : 'Boca',
			isCorrect: false
		}]
	},{
		name : 'kanjis/bajar/kanji-bajar',
		kun : 'お(ります) ふ(ります)',
		on : 'コウ ゴ',
		options: [{
			text : 'Bajar',
			isCorrect: true
		},{
			text : 'Subir',
			isCorrect: false
		},{
			text : 'Llover',
			isCorrect: true
		},{
			text : 'Bañar',
			isCorrect: false
		}]
	}];
	puzzlesLesson17 = [{
		name : 'kanjis/memorizar/kanji-memorizar',
		kun : 'おぼ(えます)',
		on : 'カク',
		options: [{
			text : 'Olvidar',
			isCorrect: false
		},{
			text : 'Memorizar',
			isCorrect: true
		},{
			text : 'Pagar',
			isCorrect: false
		},{
			text : 'Devolver',
			isCorrect: false
		}]
	},{
		name : 'kanjis/olvidar/kanji-olvidar',
		kun : 'わす(れます)',
		on : 'ボウ',
		options: [{
			text : 'Preguntar',
			isCorrect: false
		},{
			text : 'Corazón',
			isCorrect: false
		},{
			text : 'Olvidar',
			isCorrect: true
		},{
			text : 'Memorizar',
			isCorrect: false
		}]
	},{
		name : 'kanjis/pagar/kanji-pagar',
		kun : 'はら(います)',
		on : 'フツ',
		options: [{
			text : 'Pregutnar',
			isCorrect: false
		},{
			text : 'Yo',
			isCorrect: false
		},{
			text : 'Devolver',
			isCorrect: false
		},{
			text : 'Pagar',
			isCorrect: true
		}]
	},{
		name : 'kanjis/devolver/kanji-devolver',
		kun : 'かえ(します)',
		on : 'ヘン',
		options: [{
			text : 'Devolver',
			isCorrect: true
		},{
			text : 'Camino',
			isCorrect: false
		},{
			text : 'Memorizar',
			isCorrect: false
		},{
			text : 'Preguntar',
			isCorrect: false
		}]
	},{
		name : 'kanjis/corazon/kanji-corazon',
		kun : 'こころ',
		on : 'シン',
		options: [{
			text : 'Seguro',
			isCorrect: false
		},{
			text : 'Olvidar',
			isCorrect: false
		},{
			text : 'Corazón',
			isCorrect: true
		},{
			text : 'Órgano',
			isCorrect: false
		}]
	},{
		name : 'kanjis/pregunta/kanji-pregunta',
		kun : 'と(います)',
		on : 'モン',
		options: [{
			text : 'Preguntar',
			isCorrect: true
		},{
			text : 'Responder',
			isCorrect: false
		},{
			text : 'Pregunta',
			isCorrect: false
		},{
			text : 'Respuesta',
			isCorrect: false
		}]
	},{
		name : 'kanjis/medicina/kanji-medicina',
		kun : 'くすり',
		on : 'ヤク',
		options: [{
			text : 'Medicamento',
			isCorrect: true
		},{
			text : 'Flor',
			isCorrect: false
		},{
			text : 'Droga',
			isCorrect: false
		},{
			text : 'Malestar',
			isCorrect: false
		}]
	},{
		name : 'kanjis/malestar/kanji-malestar',
		kun : '',
		on : 'ビョウ',
		options: [{
			text : 'Enfermedad',
			isCorrect: false
		},{
			text : 'Malestar',
			isCorrect: true
		},{
			text : 'Medicamento',
			isCorrect: false
		},{
			text : 'Medicina',
			isCorrect: false
		}]
	},{
		name : 'kanjis/flor/kanji-flor',
		kun : '',
		on : 'エイ',
		options: [{
			text : 'Medicina',
			isCorrect: false
		},{
			text : 'Inglés',
			isCorrect: false
		},{
			text : 'Flor sin fruto',
			isCorrect: true
		},{
			text : 'Inglaterra',
			isCorrect: false
		}]
	},{
		name : 'kanjis/terminar/kanji-terminar',
		kun : 'お(わります)',
		on : 'シュウ',
		options: [{
			text : 'Terminar',
			isCorrect: true
		},{
			text : 'Terminal',
			isCorrect: false
		},{
			text : '¡Tiempo!',
			isCorrect: false
		},{
			text : 'Finalizar',
			isCorrect: false
		}]
	},{
		name : 'kanjis/respuesta/kanji-respuesta',
		kun : 'こた(え)',
		on : 'トウ',
		options: [{
			text : 'Respuesta',
			isCorrect: true
		},{
			text : 'Pregunta',
			isCorrect: false
		},{
			text : 'Reactivo',
			isCorrect: false
		},{
			text : 'Memorizar',
			isCorrect: false
		}]
	},{
		name : 'kanjis/topico/kanji-topico',
		kun : '',
		on : 'ダイ',
		options: [{
			text : 'Tópico',
			isCorrect: true
		},{
			text : 'Respuesta',
			isCorrect: false
		},{
			text : 'Reactivo',
			isCorrect: false
		},{
			text : 'Olvidar',
			isCorrect: false
		}]
	}];

	randomPuzzles (array) {
		var index, index2, aux;
		for (var k = 0; k < 1000; k++) {
			index = Math.floor(Math.random() * array.length);
			index2 = Math.floor(Math.random() * array.length);
			aux = array[index];
			array[index] = array[index2];
			array[index2] = aux;
		}
		for (var k = 0; k < array.length; k++) {
			for (var a = 0; a < 100; a++) {
				index = Math.floor(Math.random() * 4);
				index2 = Math.floor(Math.random() * 4);
				aux = array[k].options[index];
				array[k].options[index] = array[k].options[index2];
				array[k].options[index2] = aux;
			}
		}
	}

	setLesson (lesson){
		this.currentLesson = lesson;
	}

	getPuzzles () {
		if (this.currentLesson === 16) {
			return this.puzzlesLesson16;
		} else if (this.currentLesson === 17) {
			return this.puzzlesLesson17;
		}
		return [];
	}

	getCurrentPuzzle(sum){
		if (this.currentLesson === 16) {
			if (sum) this.currentPuzzle16++;
			return this.currentPuzzle16;
		} else if (this.currentLesson === 17) {
			if (sum) this.currentPuzzle17++;
			return this.currentPuzzle17;
		}
		return -1;
	}

	constructor() {
		this.randomPuzzles(this.puzzlesLesson16);
		this.randomPuzzles(this.puzzlesLesson17);
	}
}
