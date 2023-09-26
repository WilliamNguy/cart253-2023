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

let covid19 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 28,
    fill: {
        r: 255,
        g: 0,
        b: 0
    }
};

let player = {
    x: 1200,
    y: 250,
    size: 100,
    fill: 250
};

let rectScale = 0; 

function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight)
    
    covid19.y = random(0,height);
    covid19.vx = covid19.speed;

}


/**
 * Description of draw()
*/
function draw() {
    background(0,0,0)

    //COVID19 mouvement
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0,height);

    }
   

    //CHECK FOR CATCHING COVID19
    let d = dist(player.x, player.y, covid19.x, covid19.y);
    if (d < covid19.size/2 + player.size/2) {
        noLoop();
    };

    //DISPLAY PLAYER
    fill(player.fill);
    ellipse(player.x, player.y, player.size);

    

    //DISPLAY COVID19
    fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    ellipse(covid19.x, covid19.y, covid19.size);

    rectScale = rectScale + 0.01;
}

//PLAYER MOUNVEMENT
function mouseDragged () {
    player.x = mouseX;
    player.y = mouseY;
};
