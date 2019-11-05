//**********Good luck************ */
// audio
let attack = new Audio('resources/sound/attack.mp3');
let heal = new Audio('resources/sound/heal.mp3');
let takingHit = new Audio('resources/sound/taking-hit.mp3');

// gameOver boolean
let gameOver = false;

// delay in milli seconds
let delayInMilliseconds = 1500;

// PLAYER OBJECT
player = {
    "race": "Human",
    "type": "ledge",
    "moves": ["attack", "heal"],
    "health": 100,
    "attack": function() {
        
        // play sound if sound is on
        if (soundOn) {
            attack.play();
        }
        
        // make value attackPoints & criticalStrike
        let attackPoints = Math.floor(Math.random() * (120 - 20 + 1) + 20);
        let criticalStrike = Math.random() * 100;

        // If criticalStrike is between 75% and 99.99% double attackPoints
        if (criticalStrike >= 75) {
            attackPoints *= 2
            
            // do random puns
            randomPun(puns);
            
            // subtract attackpoints from SANS.health
            sans.health -= attackPoints;
            
            // if SANS.health is zero or lower
            if (sans.health <= 0) {
                
                // show result
                console.log("%cPLAYER attacks Critical Strike! -" + attackPoints + "\nSANS health: 0 \nPlayer has won!", "color:#e74c3c;");
                
                // do Restart Game function
                gameOver = true;
                setTimeout(function() {
                    GameRestart();
                }, delayInMilliseconds);
            
            // if SANS.health is above zero
            } else {
                // show result
                console.log("%cPLAYER attacks Critical Strike! -" + attackPoints + "\nSANS health: " + sans.health, "color:#e74c3c;");
                
                // Automatically let SANS make his move
                setTimeout(function() {
                    sans.makeMove();
                }, delayInMilliseconds);
            }
        
        // If criticalStrike is between 0% and 74.99% do normal attackPoints
        } else {
            
            // do random puns
            randomPun(puns);
            
            // subtract attackpoints from SANS.health
            sans.health -= attackPoints;
            
            // if SANS.health is zero or lower
            if (sans.health <= 0) {
                // show result
                console.log("%cPLAYER attacks -" + attackPoints + "\nSANS health: 0 \nPlayer has won!", "color:#e74c3c;");
                
                // do Restart Game function
                gameOver = true;
                setTimeout(function() {
                    GameRestart();
                }, delayInMilliseconds);
            } else {
                // show result
                console.log("%cPLAYER attacks -" + attackPoints + "\nSANS health: " + sans.health, "color:#e74c3c;");

                // Automatically let SANS make his move
                setTimeout(function() {
                    sans.makeMove();
                }, delayInMilliseconds);
            }
        }
    },
    "heal": function() {
        
        // play sound if sound is on
        if (soundOn) {
            heal.play();
        }
        
        // if player health is exactly 100
        if (this.health == 100) {
            console.log("health is already 100");
            
            // do overHeal pun
            randomPun(overHealReaction);
            
            // Attack instead
            setTimeout(function() {
                player.attack();
            }, delayInMilliseconds);
            
        // if player health is higher or lower than 100
        } else {
            // do random pun
            randomPun(puns);
            
            // generate heal points
            let healPoints = Math.floor(Math.random() * (20 - 8 + 1) + 8);
            
            // add healpoints to PLAYER.health
            player.health += healPoints;
            
            // if PLAYER.health is 100 or higher
            if (player.health >= 100) {
                // change PLAYER.health back to exactly 100
                player.health =  100;
                
                // show result
                console.log("%cPLAYER heals +" + healPoints +  "\nPLAYER health: max" + player.health, "color:#e74c3c;");
            } else {
                // show result
                console.log("%cPLAYER heals +" + healPoints +  "\nPLAYER health: " + player.health, "color:#e74c3c;");
            }

            // Automatically let SANS make his move
            setTimeout(function() {
                sans.makeMove();
            }, delayInMilliseconds);
        }
    }
}

// SANS OBJECT
sans = {
    "race": "Monster",
    "type": "Skeleton",
    "moves": ["attack", "heal"],
    "health": 1000,
    "attack": function() {
        
        // play sound if sound is on
        if (soundOn) {
            takingHit.play();
        }
        
        // make value attackPoints & criticalStrike
        let attackPoints = Math.floor(Math.random() * (15 - 10 + 1) + 10);
        let criticalStrike = Math.random() * 100;
        
        // If criticalStrike is between 75% and 99.99% double attackPoints
        if (criticalStrike >= 75) {
            attackPoints *= 2;
            
            // subtract attackpoints from PLAYER.health
            player.health -= attackPoints;
            
            // if PLAYER.health is zero or lower
            if (player.health <= 0) {
                // show result
                console.log("%cSANS attacks Critical Strike! -" + attackPoints + "\nPLAYER health: 0 \nSANS has won!", "color:#3498db;");
                gameOver = true;

                // do game restart function
                setTimeout(function() {
                    GameRestart();
                }, delayInMilliseconds);
                
            // if PLAYER.health is above zero
            } else {
                // show result
                console.log("%cSANS attacks Critical Strike! -" + attackPoints + "\nPLAYER health: " + player.health, "color:#3498db;");
            }
            
        // If criticalStrike is between 0% and 74.99% do normal attackPoints
        } else {
            // subtract attackpoints from PLAYER.health
            player.health -= attackPoints;
            
            if (player.health <= 0){
                // show result
                console.log("%cSANS attacks -" + attackPoints + "\nPLAYER health: 0 \nSANS has won!", "color:#3498db;");
                
                // do game restart function
                gameOver = true;
                setTimeout(function() {
                    GameRestart();
                }, delayInMilliseconds);
                
            } else {
                // show result
                console.log("%cSANS attacks -" + attackPoints + "\nPLAYER health: " + player.health, "color:#3498db;");   
            }
        }
    },
    "heal": function() {
        
        // play sound if sound is on
        if (soundOn) {
            heal.play();
        }
        
        // if player health is exactly 100
        if (this.health == 1000) {
            // attack instead
            sans.attack();
        // if player health is higher or lower than 100
        } else {
            // Generate healpoints
            let healPoints = Math.floor(Math.random() * (80 - 40 + 1) + 40);
            // add healpoints to SANS.health
            sans.health += healPoints;
            
            // if SANS.health is 1000 or higher
            if (sans.health >= 1000) {
                // change SANS.healh back to 1000
                sans.health =  1000;
                
                // show result
                console.log("%cSANS heals +" + healPoints +  "\nSANS health: max" + sans.health, "color:#3498db;");
            } else {
                // show result
                console.log("%cSANS heals +" + healPoints +  "\nSANS health: " + sans.health, "color:#3498db;");
            }
        }
    },
    // choose a random move for SANS
    "makeMove": function() {
        let move = this.moves[Math.floor(Math.random() * this.moves.length)];
        this[move]();
    }
}

// Restart Game
function GameRestart() {
    
    // if gameover = true => reset everything
    if (gameOver) {
        gameOver = false;
        player.health = 100;
        sans.health = 1000;
        randomPun(startpun);
        console.log("Game has reset, play again!");
    // if game over is not true
    } else {
        console.log("Game is not over yet!");
    }
}





