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
let secondPaddle;
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
    secondPaddle = new Paddle(20,300);
    secondPaddle.x = width - secondPaddle.width/2;
    secondPaddle.y = height/2;

    
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

    paddle.move();
    paddle.display();

    //mouvement and display for second paddle
    secondPaddle.move();
    secondPaddle.display();

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if (ball.active);
        ball.gravity(gravityForce);
        ball.move();
        ball.bounce(paddle);
        ball.bounce(secondPaddle);// add collision for second paddle.
        ball.display();
    }
}