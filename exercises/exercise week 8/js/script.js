/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let gravityForce = 0.0025;
let paddle;
let verticalPaddle;
let verticalPaddleSpeed = 5;
let balls = [];
let numBalls = 1;
// setting game states
let gameState = "simulation";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);


    paddle = new Paddle(300,20);

    //Creating a second paddle and putting it vertically on the right side of the screen.
    verticalPaddle = new VerticalPaddle(20,300);

    
    for (let i = 0; i < numBalls; i++) {
        let x = random(0,width);
        let y = random(-400,-100);
        let ball = new Ball(x,y);
        balls.push(ball);
    }
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    if (gameState === "simulation") {
        if (keyIsDown(UP_ARROW)) {
            verticalPaddle.move(-verticalPaddleSpeed);
        }
        else if (keyIsDown(DOWN_ARROW)) {
            verticalPaddle.move(verticalPaddleSpeed);
        }
        verticalPaddle.display();
    
        paddle.move();
        paddle.display();
        
        for (let i = 0; i < balls.length; i++) {
            let ball = balls[i];
            if (ball.active); {
                ball.gravity(gravityForce);
            ball.move();
            ball.bounce(verticalPaddle);// add collision for second paddle.
            ball.bounce(paddle);
            ball.display();

            if (ball.x + ball.size/2 > width) {
                gameState = "Win";
            }
            else if (ball.y + ball.size/2 > height) {
                gameState = "Lose";
                }
            }           
        }
    }
    else if (gameState === "Win") {
        fill(255);
        textSize(32);
        textAlign(CENTER,CENTER);
        text("You Win!", width/2, height/2);
    }
    else if (gameState === "Lose") {
        fill(255);
        textSize(32);
        textAlign(CENTER,CENTER);
        text("You Lose!", width/2, height/2);
    }
    
}