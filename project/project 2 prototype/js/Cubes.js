class Cube {
    constructor() {
        this.size = 20;
        this.isVisible = true;
        this.randomPosition();
    }

    randomPosition() {
        this.x = random(20, width  - 50);
        this.y = random(20, height - 50);
    }


    display() {
        if(this.isVisible) {
            fill(0, 255, 255);
            rect(this.x, this.y, this.size, this.size);
        }
    }


    isPlayerTouch(playerX,playerY,playerSize) {
        if (this.isVisible) {
            return (
                playerX + playerSize/2 > this.x && playerX - playerSize/2 < this.x + this.size && playerY + playerSize/2 > this.y && playerY - playerSize/2 < this.y + this.size
            );
        }
        return false
    }
    collect() {
        this.isVisible = false;
        collectedCubes++;
    }
}
