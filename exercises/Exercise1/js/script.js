"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let bg = { 
    r: 0,
    g: 0,
    b: 0
};

let circle1 = {
    x: 0,
    y: 390,
    size: 250,
    fill: 255,
    alpha: 200
};

let rectangle = {
    x: 1360,
    y: 100,
    w: 200,
    h: 100,
    fill: 255,
    alpha: 200
};

let square = {
    x: 1440,
    y: 500,
    size: 300,
    fill: 255,
    
    alpha: 200
};


// setup()
//
// Description of setup() goes here.
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

}

// draw()
//
// Description of draw() goes here.
function draw() {
    //BACKGROUND
    background(bg.r,bg.g,bg.b);
    bg.r = mouseX;
    bg.g = mouseY;
    bg.b = 84;

    //SHAPE#1
    circle1.fill = map(mouseX,0, width, 0, 255)
    circle1.x = circle1.x + 1;
    circle1.x = constrain(circle1.x,0,1315);
    fill(circle1.fill ,circle1.alpha);
    ellipse(circle1.x, circle1.y , circle1.size);
  
    //SHAPE#2
    
    fill(rectangle.fill ,rectangle.alpha);
    rect(rectangle.x, mouseY,rectangle.w , mouseY);

    //SHAPE#3
    rectMode(CENTER)
    fill(square.fill , square.alpha);
    rect(width / 2, height / 2, mouseY);

  

    
    

 
}
