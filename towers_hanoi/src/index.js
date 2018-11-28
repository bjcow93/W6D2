const HanoiGame = require("/Users/appacademy/Desktop/W6D2/towers_hanoi/src/game.js");
const HanoiView = require("/Users/appacademy/Desktop/W6D2/towers_hanoi/src/hanoi-view.js");

$(() => {
    const rootEl = $(".hanoi");
    const game = new HanoiGame();
    new HanoiView(game, rootEl);
});

console.log("Rikey is a fool");
