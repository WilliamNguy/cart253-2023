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
let numBalls = 10;

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

    // //mouvement and display for second paddle
    // verticalPaddle.move();
    // verticalPaddle.display();

    // make second paddle move with keys
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
        if (ball.active);
        ball.gravity(gravityForce);
        ball.move();
        ball.bounce(verticalPaddle);// add collision for second paddle.
        ball.bounce(paddle);
        ball.display();
    }
}