class Player {
    constructor(x,y,size,speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 5;
    }

    move(dx,dy) {
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
}

