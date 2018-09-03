import { game, Sprite } from "./sgc/sgc.js";
game.setBackground("Stadium.png");
game.showScore = true;

class PlayerWizard extends Sprite {
    constructor() {
        super();
        this.name = "Marcus the Wizard";
        this.setImage("andrewMccutchen.png");
        this.width = 48;
        this.height = 48;
        this.x = 400;
        this.y = 552;
        this.speedWhenWalking = 100;
    }
    handleDownArrowKey() {
        this.speed = this.speedWhenWalking;
        this.angle = 270;
    }
    handleUpArrowKey() {
        this.speed = this.speedWhenWalking;
        this.angle = 90;
    }
    handleLeftArrowKey() {
        this.speed = this.speedWhenWalking;
        this.angle = 180;
    }
    handleRightArrowKey() {
        this.speed = this.speedWhenWalking;
        this.angle = 0;
    }
}
let marcus = new PlayerWizard();
marcus.name = "marcus";
