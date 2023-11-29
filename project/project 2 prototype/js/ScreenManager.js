class ScreenManager {
    constructor() {
        this.currentScreen = 0;
        // this.backgroundMusic = null;
        this.transitionSound = null;
        this.redDots = [];
        for (let i = 0; i < 5; i++) {
            this.redDots.push(new RedDots(i))
        }
    }

    preload() {
        this.transitionSound = loadSound('assets/sounds/minecraftdoor.mp3');

    //     if(this.currentScreen === 0) {
    //         this.backgroundMusic = loadSound('assets/sounds/classical.mp3');
    //     }
    }

 
    displayScreen1() {
        if (this.currentScreen === 0) {
            background(255,255,255);
            this.screenBorders1();
        }
   
    }
    displayScreen2() {
        if (this.currentScreen === 1) {
            background(0,255,0);
            this.screenBorders2();
        }
        for (let dot of this.redDots) {
            dot.move();
            dot.display();
        }
    
    }
    displayScreen3() {
        if (this.currentScreen === -1) {
            background(255,0,0);
            this.screenBorders3();
        }
    }
    displayScreen4() {
        if (this.currentScreen === 2) {
            background(0,0,255);
            this.screenBorders4();
        }
    }
    displayScreen5() {
        if (this.currentScreen === -2) {
            background(255,255,0);
        }
    }
    screenBorders1() {
        fill(0);
        rect(0,0,20,700); // left side
        rect(width-20,0,20,700); // right side
        rect(0,0,700,30); // top
        rect(800,0,width,30); // top
        rect(0,height-20,width,20);
    }
    screenBorders3() {
        fill(0);
        rect(0,0,20,height); // left side
        rect(width-20,0,20,700); // right side
        rect(0,0,width,30); // top
        rect(0,height-20,width,20); //bottom
    }
    screenBorders2() {
        fill(0);
        rect(0,0,20,700); // left side
        rect(width-20,0,20,height); // right side
        rect(0,0,width,30); // top
        rect(0,height-20,width,20); //bottom
    }
    screenBorders4() {
        fill(0);
        rect(0,0,20,height); // left side
        rect(width-20,0,20,height); // right side
        rect(0,0,width,30); // top
        rect(0,height - 20,700,30); // bottom
        rect(800,height - 20,width,30); // bottom
    }
    // screenBorders2() {

    // }
    // screenBorders3() {

    // }
    // screenBorders4() {

    // }
    // screenBorders() {

    // }


    isPlayerInCurrentScreen(playerX, playerY) {
        // const screen = this.screens[this.currentScreen];
        return (
            playerX >= 0 && playerX <= width && playerY >= 0 && playerY <= height
        );
    }
    switchToNextScreen() {
        this.currentScreen = (this.currentScreen + 1)
    }
    switchToPreviousScreen() {
        this.currentScreen = (this.currentScreen - 1) 
    }
    switchToNextTopScreen() {
        this.currentScreen = (this.currentScreen + 2)
    }
    switchToPreviousBottomScreen() {
        this.currentScreen = (this.currentScreen - 2) 
    }
    
    checkTransition (player) {
        
        if(this.currentScreen !== player.previousScreen) {
            this.transitionSound.play();
            player.previousScreen = this.currentScreen;

            if(backgroundMusic && backgroundMusic.isPlaying()) {
                backgroundMusic.stop();
            }
            if(backgroundMusic && backgroundMusic1.isPlaying()) {
                backgroundMusic1.stop();
            }
            if(this.transitionSound) {
                this.transitionSound.play();
            }
            if(this.currentScreen === 0) {
                if(backgroundMusic) {
                    backgroundMusic.loop();
                }
            }
            else if (this.currentScreen === 1) {
                if (backgroundMusic1) {
                    backgroundMusic1.loop();
                }
            }

        }

        if(player.x < 0) {
            this.switchToPreviousScreen();
            player.x = width;
        }
        else if (player.x > width) {
            this.switchToNextScreen();
            player.x = 0;
        }
        else if (player.y < 0) {
            this.switchToNextTopScreen();
            player.y = height;
        }
        else if (player.y > height) {
            this.switchToPreviousBottomScreen();
            player.y = 0;
        }
        
 
    }
}