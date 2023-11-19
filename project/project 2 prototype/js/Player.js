class Player {
    constructor(x,y,size,speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 5;
        this.previousScreen = 0;
        this.isMoving = false;

    }

    move(dx,dy) {
        if (dx !== 0 || dy !== 0) {
            this.isMoving = true;
            if (moveSound && !moveSound.isPlaying()) {
                moveSound.play();
            }
        }
        else {
            this.isMoving = false;
            if (moveSound && moveSound.isPlaying()) {
            moveSound.stop();
            }
        }

        this.x += dx;
        this.y += dy;
    }

    display() {
        fill(255)
        ellipse(this.x,this.y,this.size);
    }

    moveKeyPress() {
        if (keyIsDown(LEFT_ARROW)) {
            this.move(-5,0);
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.move(5,0);
        }
        if (keyIsDown(UP_ARROW)) {
            this.move(0,-5);
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.move(0,5);
        }
        
    
    }
    keyReleased() {
        if(!keyIsDown(LEFT_ARROW)&& !keyIsDown(RIGHT_ARROW)&& !keyIsDown(UP_ARROW)&& !keyIsDown(DOWN_ARROW)) {
            this.isMoving = false;
            if(moveSound && moveSound.isPlaying()) {
                moveSound.stop();
            }
        }
    }
}

