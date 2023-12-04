class Player {
    constructor(x,y,size,speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 1;
        this.previousScreen = 0;
        this.isMoving = false;

    }

    move(dx,dy,screenManager) {

        let newX = this.x + dx * this.speed;
        let newY = this.y + dy * this.speed;
    
    if (screenManager.currentScreen === 0) {
        // Check for collisions with starting screen borders
        const leftRectangle = newX - this.size / 2 <= 20 && newY + this.size / 2 >= 20 && newY - this.size / 2 <= 700 - 20;
        const rightRectangle = newX + this.size / 2 >= width - 20 && newY + this.size / 2 >= 20 && newY - this.size / 2 <= 700 - 20;
        const topRectangle = newY - this.size / 2 <= 27 && !(newX + this.size / 2 >= 750 && newX - this.size / 2 <= 750);
        const bottomRectangle = newY + this.size / 2 >= height - 20 && newX + this.size / 2 >= 20 && newX - this.size / 2 <= width;
    
        // If there are no collisions with the black rectangles, update the player's position
        if (!(leftRectangle || rightRectangle || topRectangle || bottomRectangle)) {
            this.x = newX;
            this.y = newY;
        }
    } 
    else if (screenManager.currentScreen === -1) {
        const leftRedRectangle = newX - this.size/2 <= 20;
        const rightRedRectangle = newX + this.size/2 >= width - 20 && newY + this.size/2 >= 20 && newY - this.size/2 <= 700 - 20;
        const topRedRectangle = newY - this.size/2 <= 27;
        const bottomRedRectangle = newY + this.size/2 >= height - 20;

        const rectangle1 = newX - this.size / 2 <= 1680 && newX + this.size / 2 >= 1080 && newY + this.size / 2 >= 630 && newY - this.size / 2 <= 700;
        const rectangle2 = newX - this.size / 2 <= 1150 && newX + this.size / 2 >= 1080 && newY + this.size / 2 >= 320 && newY - this.size / 2 <= 630;
        const rectangle3 = newY - this.size / 2 <= 390 && newX + this.size / 2 >= 250 && newX - this.size / 2 <= 1080 && newY + this.size / 2 >= 320;
        const rectangle4 = newX - this.size / 2 <= 920 && newX + this.size / 2 >= 850 && newY + this.size / 2 >= 540 && newY - this.size / 2 <= 940;
        const rectangle5 = newX - this.size / 2 <= 850 + 70 && newX + this.size / 2 >= 250 && newY + this.size / 2 >= 540 && newY - this.size / 2 <= 610;
        if (!(leftRedRectangle || rightRedRectangle || topRedRectangle || bottomRedRectangle) 
        && !(rectangle1 || rectangle2 || rectangle3 || rectangle4 || rectangle5)
    ) {
            this.x = newX;
            this.y = newY;
        }
    }
    else if (screenManager.currentScreen === 1) {
        const leftGreenRectangle = newX - this.size/2 <= 20 && newY + this.size/2 >= 20 && newY - this.size/2 <= 700 - 20;
        const rightGreenRectangle = newX + this.size/2 >= width - 20;
        const topGreenRectangle = newY - this.size/2 <= 27;
        const bottomGreenRectangle = newY + this.size/2 >= height - 20;

        if (!(leftGreenRectangle || rightGreenRectangle || topGreenRectangle || bottomGreenRectangle)) {
            this.x = newX;
            this.y = newY;
        }
    }
    else if (screenManager.currentScreen === 2) {
        const leftBlueRectangle = newX - this.size/2 <= 20;
        const rightBlueRectangle = newX + this.size/2 >= width - 20;
        const topBlueRectangle = newY - this.size/2 <= 27;
        const bottomBlueRectangle = newY + this.size/2 >= height - 20 && !(newX + this.size / 2 >= 750 && newX - this.size / 2 <= 750);

        const rectangle1 = newX + this.size/2 >= 1000 && newX - this.size/2 <= 1020 && newY + this.size/2 >= 200 && newY - this.size/2 <= 300;
        const rectangle2 = newX + this.size/2 >= 650 && newX - this.size/2 <= 670 && newY + this.size/2 >= 100 && newY - this.size/2 <= 200;
        const rectangle3 = newX + this.size/2 >= 500 && newX - this.size/2 <= 520 && newY + this.size/2 >= 300 && newY - this.size/2 <= 400;
        const rectangle4 = newX + this.size/2 >= 1200 && newX - this.size/2 <= 1220 && newY + this.size/2 >= 100 && newY - this.size/2 <= height - 100;
        const rectangle5 = newX + this.size/2 >= 1300 && newX - this.size/2 <= 1320 && newY + this.size/2 >= 100 && newY - this.size/2 <= height - 100;
        const rectangle6 = newX + this.size/2 >= 1400 && newX - this.size/2 <= 1420 && newY + this.size/2 >= 100 && newY - this.size/2 <= height - 100;
        const rectangle7 = newX + this.size / 2 >= 200 && newX - this.size / 2 <= 220 && newY + this.size / 2 >= 0 && newY - this.size / 2 <= 420;            const rectangle8 = newX + this.size / 2 >= 400 && newX - this.size / 2 <= 420 && newY + this.size / 2 >= 500 && newY - this.size / 2 <= height;
        const rectangle9 = newX + this.size / 2 >= 1100 && newX - this.size / 2 <= 1120 && newY + this.size / 2 >= 400 && newY - this.size / 2 <= height;
        const rectangle10 = newX + this.size / 2 >= 1000 && newX - this.size / 2 <= 1020 && newY + this.size / 2 >= 500 && newY - this.size / 2 <= 700;
        const rectangle11 = newX + this.size / 2 >= 700 && newX - this.size / 2 <= 720 && newY + this.size / 2 >= 700 && newY - this.size / 2 <= height;
        const rectangle12 = newX + this.size / 2 >= 800 && newX - this.size / 2 <= 820 && newY + this.size / 2 >= 700 && newY - this.size / 2 <= height;
        if (!(leftBlueRectangle || rightBlueRectangle || topBlueRectangle || bottomBlueRectangle) && !(
            rectangle1 || 
            rectangle2 
            || rectangle3 || rectangle4 || rectangle5 || rectangle6 || rectangle7 || rectangle8 || rectangle9 || rectangle10 || rectangle11 || rectangle12
            )) {
            this.x = newX;
            this.y = newY;
        }
    }
    else {
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

