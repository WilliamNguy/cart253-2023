"use strict";

let oscillator;
let t = 0;

function setup() {
    createCanvas (windowWidth, windowHeight);
    userStartAudio();

    oscillator = new p5.Oscillator(440,`sine`);
    oscillator.amp(0.2);   
}

function draw() {
   background(0);

   let noiseValue = noise(t);
   let newFreq = map(noiseValue,0,1,440,800);
   oscillator.freq(newFreq);

   t = t + 0.1;
}

function mousePressed() {
   oscillator.start();
}

function mouseReleased() {
    oscillator.stop();
}
