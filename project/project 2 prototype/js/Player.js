class Player {
    constructor(x,y,size,speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 5;
        this.previousScreen = 0;
        this.isMoving = false;

    }

    move(dx,dy,screenManager) {

        let newX = this.x + dx;
        let newY = this.y + dy;
    
    if (screenManager.currentScreen === 0) {
        // Check for collisions with the specific black rectangles
        const leftRectangle = newX - this.size / 2 <= 20 && newY + this.size / 2 >= 20 && newY - this.size / 2 <= 700 - 20;
        const rightRectangle = newX + this.size / 2 >= width - 20 && newY + this.size / 2 >= 20 && newY - this.size / 2 <= 700 - 20;
        const topRectangle = newY - this.size / 2 <= 20 && !(newX + this.size / 2 >= 750 && newX - this.size / 2 <= 750);
        const bottomRectangle = newY + this.size / 2 >= height - 20 && newX + this.size / 2 >= 20 && newX - this.size / 2 <= width;
    
        // If there are no collisions with the black rectangles, update the player's position
        if (!(leftRectangle || rightRectangle || topRectangle || bottomRectangle)) {
            this.x = newX;
            this.y = newY;
        }
    } else {
        this.x = newX;
        this.y = newY;
    }
        

        
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

        // this.x += dx;
        // this.y += dy;
    }

    display() {
        fill(255)
        ellipse(this.x,this.y,this.size);
    }

    moveKeyPress(screenManager) {
        if (keyIsDown(LEFT_ARROW)) {
            this.move(-5,0, screenManager);
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.move(5,0, screenManager);
        }
        if (keyIsDown(UP_ARROW)) {
            this.move(0,-5,screenManager);
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.move(0,5, screenManager);
        }
        
    
    }
    keyReleased() {
        this.isMoving = false;
        
        if(!keyIsDown(LEFT_ARROW)&& !keyIsDown(RIGHT_ARROW)&& !keyIsDown(UP_ARROW)&& !keyIsDown(DOWN_ARROW)) {
            // this.isMoving = false;
            if(moveSound && moveSound.isPlaying()) {
                moveSound.stop();
            }
        }
    }
}

