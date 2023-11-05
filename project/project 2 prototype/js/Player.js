class Player {
    constructor(x,y,size,speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }
}