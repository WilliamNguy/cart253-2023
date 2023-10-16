/**
PROJECT 1
*/

"use strict";



/**
Description of preload
*/

let player = {
    x: 250,
    y: 800,
    w: 150,
    h: 15
};

let ball = {
    x: 500,
    y: 500,
    size: 40,
    vx: 1,
    vy: 1,
    speed: 5
};

// let state = `title`;

function preload() {

}

let collisionCount = 0; 

let square = null;

let backgroundColor = 0;


/**
Description of setup
*/
function setup() {
    createCanvas (windowWidth, windowHeight);
    noStroke();
    rectMode(CENTER);
    square = yellowSquare();
}


/**
Description of draw()
*/
function draw() {
    background(backgroundColor);

    // if (state === `title`) {
    //     title();
    // }
    // else if (state === `simulation`) {
    //     simulation();
    // }
    // else if (state ===`win`) {

    // }
    // else if (state === `lose`) {

    // }


    move();
    checkOffscreen();
    playerCollision();
    playerControl();
    moveSquare(square);

//ball
    fill(250);
    ellipse(ball.x, ball.y, ball.size);

//collision text
    fill(255);
    textAlign(CENTER, TOP);
    text(`Collisions: ${collisionCount}`, width / 2, 10 );
}



//falling squares for power ups
function yellowSquare() {
    return {
        x:random(width),
        y: 0,
        size: 20,
        color: color(255,255,0),
    };
}
function moveSquare(square) {
    fill(square.color);
    rect(square.x, square.y, square.size, square.size);
    square.y += 3;

    if (square.y > height) {
        square.x = random(width);
        square.y = 0;
    }
    if (square.x + square.size/2 > player.x - player.w/2 && square.x - square.size/2 < player.x + player.w/2 && square.y + square.size/2 > player.y - player.h/2 && square.y - square.size/2 < player.y + player.h/2) {
        backgroundColor = color(random(255), random(255), random(255)); 
        square.x = random(width);
        square.y = 0;
    }
}

//creating ball motion
function move() {
  
    ball.x = ball.x + (ball.vx * ball.speed);
    ball.y = ball.y + (ball.vy * ball.speed);
    
}

//ball boundaries
function checkOffscreen() {
    
    if(ball.x < 0) {
        ball.vx = ball.vx * -1;
    }

    if(ball.x > windowWidth) {
        ball.vx = ball.vx * -1;
    }

    if(ball.y < 0) {
        ball.vy = ball.vy * -1;
    }
}
//check for objects colliding
function playerCollision() {
    if (ball.x + ball.size > player.x && ball.x - ball.size < player.x + player.w && ball.y + ball.size > player.y && ball.y - ball.size < player.y + player.h) {
        ball.vx = ball.vx * 1;
        ball.vy += random(-0.5, 1);
        ball.vy = ball.vy * -1;
        ball.vx = random(-2, 1);
        collisionCount++;
    }    
}
//lets player control platform
function playerControl() {
    player.x = mouseX;
    
    fill(250);
    rect(player.x, player.y, player.w, player.h);

}


// function title() {
//     textSize(64);
//     fill(200,100,100);
//     textAlign(CENTER,CENTER);
//     text(`GAME`,width/2,height/2);
// }
