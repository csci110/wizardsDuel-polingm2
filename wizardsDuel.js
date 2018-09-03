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
        this.speedWhenWalking = 200;
    }
    handleDownArrowKey() {
        this.speed = this.speedWhenWalking;
        this.angle = 270;
    }
    handleUpArrowKey() {
        spell.x = this.x;
        spell.y = this.y;
    }
    handleLeftArrowKey() {
        this.speed = this.speedWhenWalking;
        this.angle = 180;
    }
    handleRightArrowKey() {
        this.speed = this.speedWhenWalking;
        this.angle = 0;
    }
    handleGameLoop() { //keeps Marcus in display area
        this.x = Math.max(0, this.x);
        this.x = Math.min(752, this.x);
        this.speed = 0;
    }
}
let marcus = new PlayerWizard();
marcus.name = "marcus";

class Spell extends Sprite {
    constructor() {
        super();
        this.speed = 400;
        this.height = 48;
        this.width = 48;
    }
    handleBoundryContact() {
        game.removeSprite(this);
    }
}

let spell = new Spell();
spell.name = ("A spell cast by Marcus");
spell.angle = 90;
spell.setImage("baseball.png");

class NonPlayerWizard extends Sprite {
    constructor() {
        super();
        this.name = ("The mysterious stranger");
        this.setImage("bird.png");
        this.width = 48;
        this.height = 48;
        this.x = 400;
        this.y = this.height;
        this.angle = 180;
        this.speed = 150;
    }
    handleGameLoop() {
        if(this.x <= 0) {
            //leftward motion has reached left corner, so turn right
            this.x = 0;
            this.angle = 0;
        }
        if(this.x >= 750) {
            //Rightward motion has reached right corner, so turn left
            this.x = 750;
            this.angle = 180;
        }
    }
}

let stranger = new NonPlayerWizard();
stranger.name = ("stranger");