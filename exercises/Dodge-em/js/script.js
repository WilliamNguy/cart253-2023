/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
let lebron = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
}


let ball = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 10,
    fill: {
        r: 238,
        g: 103,
        b: 48
    }
};

let player = {
    x: 1200,
    y: 250,
    size: 100,
    fill: {
        a: 0,
        d: 0,
        c: 0
    }

    
};



function preload() {
    lebron.image = loadImage("assets/images/lebronjames.png");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight)

    
    ball.y = random(0,height);
    ball.vx = ball.speed;

}


/**
 * Description of draw()
*/
function draw() {
    background(223,187,133)

    image(lebron.image,lebron.x, lebron.y);

    //COVID19 mouvement
    ball.x = ball.x + ball.vx;
    ball.y = ball.y + ball.vy;

    if (ball.x > width) {
        ball.x = 0;
        ball.y = random(0,height);

    }

    if (ball.x > width/2) {
        ball.y = random(0,height);
        ball.vx = ball.speed;
    }
   

    //CHECK IF YOU GOT HIT BY LEBRON
    let d = dist(player.x, player.y, ball.x, ball.y);
    if (d < ball.size/2 + player.size/2) {
        noLoop();
    };

    //DISPLAY PLAYER
    fill(player.fill.a, player.fill.d, player.fill.c);
    ellipse(player.x, player.y, player.size);

    

    //DISPLAY BASKETBALL
    fill(ball.fill.r, ball.fill.g, ball.fill.b);
    
    ellipse(ball.x, ball.y, ball.size);

    
   
    
    
}

//PLAYER MOUNVEMENT
function mouseDragged () {
    player.x = mouseX;
    player.y = mouseY;
};
