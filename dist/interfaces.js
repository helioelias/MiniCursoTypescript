"use strict";
var tlou = {
    id: 1,
    title: 'The Last of Us',
    description: 'The best game in the world',
    genre: 'Action',
    plataform: ['PS3', 'PS4'],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
console.log(tlou);
if (tlou.getSimilars) {
    console.log(tlou.getSimilars('Dark Souls'));
}
var leftbehind = {
    id: 2,
    title: 'The Last of US - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    plataform: ['PS4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters']
};
console.log(leftbehind);
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
