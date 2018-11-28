const View = require("/Users/appacademy/Desktop/W6D2/tic_tac_toe/src/ttt-view.js");
const Game = require("/Users/appacademy/Desktop/W6D2/tic_tac_toe/node_solution/game.js");

$(() => {
    const game = new Game();
    const $el = $(".ttt");
    const view = new View(game, $el);
});
