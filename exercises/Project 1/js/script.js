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


/**
Description of setup
*/
function setup() {
    createCanvas (windowWidth, windowHeight);

}


/**
Description of draw()
*/
function draw() {
    background(0);

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


//player
    player.x = mouseX;
    
    fill(250);
    rect(player.x, player.y, player.w, player.h);

//player boundaries
   

//creating ball motion
    ball.x = ball.x + (ball.vx * ball.speed);
    ball.y = ball.y + (ball.vy * ball.speed);
    
//ball
    fill(250);
    ellipse(ball.x, ball.y, ball.size);
//ball boundaries
    if(ball.x < 0) {
        ball.vx = ball.vx * -1;
    }

    if(ball.x > windowWidth) {
        ball.vx = ball.vx * -1;
    }

    if(ball.y < 0) {
        ball.vy = ball.vy * -1;
    }

    // if(ball.y > windowHeight) {
    //     ball.vy = ball.vy * -1;
    //}
//ball collision with player
    // if(ball.y > player.y) {
    //     ball.vy = ball.vy * -1;
    // }

//    if (ball.x + ball.size >= player.x && ball.x - ball.size <= player.x + player.w && ball.y + ball.size >= player.y && ball.y - ball.size <= player.y + player.h) {
//     if (ball.x + ball.size >= player.x && ball.x - ball.size <= player.x + player.w) {
//         ball.vx = ball.vx * 1;
//         ball.vy += random(-0.5, 0.5);
//     }
//     if (ball.y + ball.size >= player.x && ball.x - ball.size <= player.y + player.h){
//         ball.vy = ball.vy * -1;
//         ball.vx = random(-0.5, 0.5);
//     }
//    }

if (ball.x + ball.size > player.x && ball.x - ball.size < player.x + player.w && ball.y + ball.size > player.y && ball.y - ball.size < player.y + player.h) {
    ball.vx = ball.vx * 1;
    ball.vy += random(-0.5, 1);
    ball.vy = ball.vy * -1;
    ball.vx = random(-0.5, 1);
}

}

// function title() {
//     textSize(64);
//     fill(200,100,100);
//     textAlign(CENTER,CENTER);
//     text(`GAME`,width/2,height/2);
// }
