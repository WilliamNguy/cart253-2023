class Player {
    constructor(x,y,size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.fill = {
            r: 173,
            g: 216,
            b: 230
        };
        this.speed = 5
        this.movingSound = movingSound;
    }

    move() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.speed;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.speed;
        }
        if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) {
            if (!this.movingSound.isPlaying()) {
                this.movingSound.play();
            }
        }
        else {
            this.movingSound.stop();
        }

        this.x = constrain(this.x,0,width-this.size);
        this.y = constrain(this.y,0,height-this.size);
    }
    display() {
        push();
        noStroke();
        fill(this.fill.r,this.fill.g,this.fill.b);
        rect(this.x,this.y,this.size,this.size);
        pop();
    }
}