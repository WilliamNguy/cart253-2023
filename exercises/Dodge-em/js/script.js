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


let shark = {
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

    
    shark.y = random(0,height);
    shark.vx = shark.speed;

}


/**
 * Description of draw()
*/
function draw() {
    background(223,187,133)

    image(lebron.image,lebron.x, lebron.y);

    //COVID19 mouvement
    shark.x = shark.x + shark.vx;
    shark.y = shark.y + shark.vy;

    if (shark.x > width) {
        shark.x = 0;
        shark.y = random(0,height);

    }

    if (shark.x > width/2) {
        shark.y = random(0,height);
        shark.vx = shark.speed;
    }
   

    //CHECK FOR CATCHING COVID19
    let d = dist(player.x, player.y, shark.x, shark.y);
    if (d < shark.size/2 + player.size/2) {
        noLoop();
    };

    //DISPLAY PLAYER
    fill(player.fill.a, player.fill.d, player.fill.c);
    ellipse(player.x, player.y, player.size);

    

    //DISPLAY COVID19
    fill(shark.fill.r, shark.fill.g, shark.fill.b);
    
    ellipse(shark.x, shark.y, shark.size);

    
   
    
    
}

//PLAYER MOUNVEMENT
function mouseDragged () {
    player.x = mouseX;
    player.y = mouseY;
};
