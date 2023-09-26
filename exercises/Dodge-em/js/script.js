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

// let = lebronImage;

let covid19 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        r: 45,
        g: 48,
        b: 81
    }
};

let player = {
    x: 1200,
    y: 250,
    size: 100,
    fill: {
        a: 239,
        d: 99,
        c: 106
    }

    
};



function preload() {
    // lebronImage = loadImage("assets/images/clown.png");
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
    background(49,199,199)

    // Image(lebronImage,0,0,100,100);

    //COVID19 mouvement
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0,height);

    }

    if (covid19.x > width/2) {
        covid19.y = random(0,height);
        covid19.vx = covid19.speed;
    }
   

    //CHECK FOR CATCHING COVID19
    let d = dist(player.x, player.y, covid19.x, covid19.y);
    if (d < covid19.size/2 + player.size/2) {
        noLoop();
    };

    //DISPLAY PLAYER
    fill(player.fill.a, player.fill.d, player.fill.c);
    ellipse(player.x, player.y, player.size);

    

    //DISPLAY COVID19
    fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    
    ellipse(covid19.x, covid19.y, covid19.size);

    
   
    
    
}

//PLAYER MOUNVEMENT
function mouseDragged () {
    player.x = mouseX;
    player.y = mouseY;
};
