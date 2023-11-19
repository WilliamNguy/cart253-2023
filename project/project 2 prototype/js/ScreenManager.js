class ScreenManager {
    constructor() {
        this.currentScreen = 0;
        // this.backgroundMusic = null;
    }

    // preload() {
    //     if(this.currentScreen === 0) {
    //         this.backgroundMusic = loadSound('assets/sounds/classical.mp3');
    //     }
    // }

 
    displayScreen1() {
        if (this.currentScreen === 0) {
            background(255,255,255);
        }
   
    }
    displayScreen2() {
        if (this.currentScreen === 1) {
            background(0,255,0);
        }
    
    }
    displayScreen3() {
        if (this.currentScreen === -1) {
            background(255,0,0);
        }
    }
    displayScreen4() {
        if (this.currentScreen === 2) {
            background(0,0,255);
        }
    }
    displayScreen5() {
        if (this.currentScreen === -2) {
            background(255,255,0);
        }
    }
    isPlayerInCurrentScreen(playerX, playerY) {
        const screen = this.screens[this.currentScreen];
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
            player.previousScreen = this.currentScreen;

            if(backgroundMusic && backgroundMusic.isPlaying()) {
                backgroundMusic.stop();
            }
            if(this.currentScreen === 0) {
                if(backgroundMusic) {
                    backgroundMusic.loop();
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