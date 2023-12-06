class RedDots {
    constructor() {
        this.size = 10;
        // this.x = width - 30;
        this.y = random(27, height - 27);
        this.speed = 5;
        this.down = 1;

        this.x = random(width - 1400,width - 30)
    }

    move() {
        this.y += this.speed * this.down;
        if (this.y<= 27 || this.y >= height - 27) {
            this.down *= -1;
        }
    }

    display() {
        fill(255,0,0);
        rect(this.x,this.y,this.size,this.size);
    }
    checkCollisionPlayer() {
        let playerX = movePlayer.x;
        let playerY = movePlayer.y;
        let playerSize = movePlayer.size;
    
        if (this.x + this.size > playerX - playerSize/2 && this.x < playerX + playerSize/2 && this.y + this.size > playerY - playerSize/2 && this.y < playerY + playerSize/2
        ) {
            movePlayer.x = 100;
            movePlayer.y = height - 50;
        }
    }
}

