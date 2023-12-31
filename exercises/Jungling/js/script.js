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
let virusSquare;

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

    virusSquare = new VirusSquare(0,0,20,20);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    if (gameState === "simulation") {
        virusSquare.move();
        virusSquare.display();
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
            if (ball.active) {
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
        //add instruction to the game
        push();
        fill(32,194,14);
        textSize(16);
        textAlign(RIGHT, TOP);
        text("This program is hacked! Nothing seems to be working. You must bounce the glitched ball to the left side of the screen to fix the program.", width, 0);
        pop();
        push();
        fill(32,194,14);
        textSize(16);
        textAlign(RIGHT, TOP);
        text("Do not let the square at the top reach the other end.", width, 20);
        pop();
        
    }
    else if (gameState === "Win") {
        fill(32,194,14);
        textSize(32);
        textAlign(CENTER,CENTER);
        text("You Win!", width/2, height/2);
    }
    else if (gameState === "Lose") {
        fill(32,194,14);
        textSize(32);
        textAlign(CENTER,CENTER);
        text("You Lose!", width/2, height/2);
    }
    
}