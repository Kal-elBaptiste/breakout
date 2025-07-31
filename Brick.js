import RectCoordinates from "./RectCoordinates.js";

export default class Brick extends RectCoordinates{
    constructor(x, y, width, height, color, hardness, score) {
        super(x, y, width, height);

        this.color = color;
        this.hardness = hardness;
        this.score = score;
    }

    draw(p, endFill){

        p.fill(this.color);
        p.rect(this.x, this.y, this.width, this.height);

        if (endFill){
            p.fill(endFill);
        }
    }
}
