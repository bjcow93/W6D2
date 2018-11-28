class View {
    constructor(game, $ele) {
        this.game = game;
        this.$ele = $ele;
        this.setupTowers();
    }

    setupTowers() {
        for (let i = 1; i < 4; i++) {
            let $ul = $("<ul></ul>");
            $ul.data("ulIdx", `${i}`);

            for (let j = 1; j < 4; j++) {
                let $li = $("<li></li>");
                $li.data("liIdx", `${i}${j}`);

                if (i === 1) {
                    $li.addClass(`disk-${j}`);
                }
                $ul.append($li);
            }
            this.$ele.append($ul);
        }
    }
}

module.exports = View;
