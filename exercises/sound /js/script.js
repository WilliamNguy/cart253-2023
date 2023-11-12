"use strict";

let barkSFX;

function preload() {
    barkSFX = loadSound(`assets/sounds/bark.wav`)
}


function setup() {
    createCanvas (windowWidth, windowHeight);
    userStartAudio();
}



function draw() {
   background(0);

   let newRate = map(mouseX,0,width,-3,3);
   barkSFX.rate(newRate);
}

function mousePressed() {
    barkSFX.loop();

}