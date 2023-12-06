class Cube {
    constructor() {
        this.size = 20;
        this.isVisible = true;
        this.randomPosition();
        this.image = loadImage('assets/images/gem.png');
    }

    randomPosition() {
        this.x = random(20, width  - 50);
        this.y = random(20, height - 50);
    }


    display() {
        if(this.isVisible) {
            image(this.image, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
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
