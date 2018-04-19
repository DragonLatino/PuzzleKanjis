"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var puzzle_component_1 = require("./puzzle/puzzle.component");
exports.rootRouterConfig = [
    { path: '', redirectTo: 'puzzle', pathMatch: 'full' },
    { path: 'puzzle', component: puzzle_component_1.PuzzleComponent }
];
//# sourceMappingURL=app.routes.js.map