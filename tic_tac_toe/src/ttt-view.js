class View {
    constructor(game, $el) {
        this.game = game;
        this.$el = $el;
        this.setupBoard();
        this.bindEvents();
    }

    bindEvents() {
        this.$el.on("click", ".square", e => {
            let $square = $(e.target);
            this.makeMove($square);
            if (this.game.isOver()) {
                setTimeout(() => {
                    alert(this.game.winner() + "wins");
                }, 100);
            }
        });
    }

    makeMove($square) {
        let pos = $square.data("rowcol");
        console.log(pos.constructor.name);
        let num1 = parseInt(pos[0]);
        let num2 = parseInt(pos[1]);
        let pos1 = [num1, num2];
        console.log(pos1);
        let $mark = this.game.currentPlayer;

        this.game.playMove(pos1);

        $square.html($mark);
        $square.removeClass();
        $square.addClass("clicked");
    }

    setupBoard() {
        for (let i = 0; i < 3; i++) {
            let $ul = $("<ul></ul>");
            for (let j = 0; j < 3; j++) {
                let $li = $("<li></li>");
                $li.addClass("square");
                $li.data("rowcol", `${i}${j}`);
                $ul.append($li);
            }
            this.$el.append($ul);
        }
    }
}

module.exports = View;
