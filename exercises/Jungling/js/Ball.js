class Ball {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 10;


        this.size = random(20, 60);
        this.active = true;
    }

    gravity(force) {
        this.ay = this.ay + force;

    }

    move() {
        this.vx = this.vx + this.ax;
        this.vy = this.vy + this.ay;

        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if (this.y - this.size/2 > height) {
            this.active = false;
        }
    }

    bounce(paddle, verticalPaddle) {
        if (this.x > paddle.x - paddle.width/2  && this.x < paddle.x + paddle.width/2 && this.y + this.size/2 > paddle.y - paddle.height/2 && this.y - this.size/2 < paddle.y + paddle.height/2) {
        //Bounce
        let dx = this.x - paddle.x;
        this.vx = this.vx + map(dx,-paddle.width/2,paddle.width/2,-2,2);

        this.vy = -this.vy;
        this.ay = 0;
        }
        // else if (
        //     this.x + this.size/2 > verticalPaddle.x - verticalPaddle.width/2 && this.x - this.size/2 < verticalPaddle.x + verticalPaddle.width/2 && this.y + this.size/2 > verticalPaddle.y - verticalPaddle.height/2 && this.y - this.size/2 < verticalPaddle.y + verticalPaddle.height/2
        // ) {
        //     let dy = this.y - verticalPaddle.y;
        //     this.vy = this.vy + map(dy, -verticalPaddle.height/2, verticalPaddle.height/ 2, -2, 2);
        //     this.vx = -this.vx;
        //     this.ay = 0;
        // }

        //Make bounce off the left screen
        if (this.x - this.size/2 < 0) {
            this.x = this.size/2;
            this.vx = -this.vx;
            this.ax = 0;
        }

    

        
    }
    
display() {
    push();
    fill(32,194,14);
    stroke(0);
    this.size = random(20, 60);
    ellipse(this.x,this.y,this.size);
    pop();
}

}