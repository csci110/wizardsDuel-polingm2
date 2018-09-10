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
        this.spellCastTime = 0;
        
    }
    handleDownArrowKey() {
        this.speed = this.speedWhenWalking;
        this.angle = 270;
    }
    handleUpArrowKey() {
        let now = game.getTime();
        if(now - this.spellCastTime >= 2) {
            this.spellCastTime = now;
            spell.x = this.x;
            spell.y = this.y - 48;
        }
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
    handleCollision(otherSprite) {
        if (this.getImage() !== otherSprite.getImage()) {
            game.removeSprite(this);
            new Fireball(otherSprite);
        }
        return false;
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
        if (this.x <= 0) {
            //leftward motion has reached left corner, so turn right
            this.x = 0;
            this.angle = 0;
        }
        if (this.x >= 750) {
            //Rightward motion has reached right corner, so turn left
            this.x = 750;
            this.angle = 180;
        }
        if(Math.random() <= 0.01) {
        let birdSpell = new Spell();
        birdSpell.x = this.x;
        birdSpell.y = this.y + 70;
        birdSpell.setImage("baseball.png");
        birdSpell.angle = 270;
        }
    }
}

let stranger = new NonPlayerWizard();
stranger.name = ("stranger");

class Fireball extends Sprite {
    constructor(deadSprite) {
        super();
        this.x = deadSprite.x;
        this.y = deadSprite.y;
        this.setImage("fireballSheet.png");
        this.name = ("A ball of fire");
        this.defineAnimation("explosion", 0, 6);
        this.playAnimation("explosion");
        game.removeSprite(deadSprite);

    }
    
    handleAnimationEnd() {
        game.removeSprite(this);

        if (!game.isActiveSprite(marcus)) {
            game.end("Andrew had his game ruined by pesky birds.\n\Better luck next time.");
        }
        if (!game.isActiveSprite(stranger)) {
            game.end("Congrats!\n\nAndrew just hit a grand\nslam in the 8th to win the game!");
        }
    }

}
