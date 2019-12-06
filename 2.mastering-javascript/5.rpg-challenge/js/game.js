
let gameManager = {

    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        switch(classType) {
            case "elf":
                player = new Player(classType, 100, 10, 12);
                break;

            case "human":
                player = new Player(classType, 100, 10, 10);
                break;

            case "orc":
                player = new Player(classType, 140, 10, 9);
                break;
    
            case "vampire":
                player = new Player(classType, 100, 10, 14);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/' + 
        classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType + 
        '</h3><p class="health-player">Health: ' + player.health + ' </p><p>Attack: ' + player.attack + ' </p>' + '<p>Speed: ' + player.speed + ' </p>';
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p> Find an enemy</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search for enemy</a>';
        getArena.style.visibility = "visible";




       
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".arena");
        let enemy1 = new Enemy("goblin", 80, 8, 10);
        let enemy2 = new Enemy("hobgoblin", 100, 10, 9);
        let enemy3 = new Enemy("troll", 120, 12, 8);
        let enemy4 = new Enemy("onepunchman", 160, 15, 15);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));
        //console.log(chooseRandomEnemy);
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy1;
                break;

            case 1:
                enemy = enemy2;
                break;

            case 2:
                enemy = enemy3;
                break;

            case 3:
                enemy = enemy4;
                break;
        }

        getHeader.innerHTML = '<p>Task: choose your move</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="playerMoves()">Attack</a>';
        getEnemy.innerHTML = '<img src="img/' +  enemy.enemyType.toLowerCase() + '.jpg" alt=""' + enemy.enemyType + 
        '"class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="enemy-health">Health: ' + enemy.health + ' </p><p>Attack: ' + enemy.attack + ' </p>' +
        '<p>Speed: ' + enemy.attack + ' </p>';
        
        
    }
}


/*let player = {
    health: 300,
    power: 50,
    heal: 50
}

let opponent = {
    health: 300,
    power: 50,
    heal: 50
}

let attackButton = document.getElementById('attack-button');
let attackButton2 = document.getElementById('attack-button2');
let healButton = document.getElementById('heal-button');
let healButton2 = document.getElementById('heal-button2');
let gameMessage = document.getElementById('game-message');
let restartButton = document.getElementById('restart-button');
let restartButton2 = document.getElementById('restart-button2');
let yieldButton = document.getElementById('yield-button');
let yieldButton2 = document.getElementById('yield-button2');

const attack = () => {
    
    let playerAttack = attackPower(player.power);
    opponent.health -= playerAttack;
    printToScreen();

    if (gameOver(opponent.health)) {
        endGame("YOU WIN !!!");
        return;
    }
    healButton.disabled = true;
    attackButton.disabled = true;
    gameMessage.innerText = "Opponent's turn"

    setTimeout(() =>{
        
        let opponentAttack = attackPower(opponent.power);
        player.health -= opponentAttack;
        printToScreen();

        gameMessage.innerText = "Your turn"

        
        if (gameOver(player.health)) {
            endGame("Opponent wins !"); 
            return;
        }
        
        attackButton.disabled = false;
        healButton.disabled = false;
    }, 1500) 
}

const heal = () => {

    let playerHeal = healPower(player.heal);
    player.health += playerHeal;
    printToScreen();

    healButton.disabled = true;
    attackButton.disabled = true;
    gameMessage.innerText = "Opponent's turn"

    setTimeout(() =>{
        
        let opponentAttack = attackPower(opponent.power);
        player.health -= opponentAttack;
        printToScreen();

        gameMessage.innerText = "Your turn"
        
        if (gameOver(player.health)) {
            endGame("Opponent wins!");
            return;
        }
        
        attackButton.disabled = false;
        healButton.disabled = false;
        
    }, 1500) 
}

const yield = () => {
    endGame("You lose!     Weakling!")
}

const attackPower = (power) => {
    return  Math.floor(Math.random() * power)
}

const healPower = (heal) => {
    return  Math.floor(Math.random() * heal)
}

const gameOver = (health) => {
    return health <= 0;
}

const endGame = (message) => {
    document.getElementById('game-message').innerText = message;
    document.getElementById('attack-button').hidden = true;
    document.getElementById('heal-button').hidden = true;
    document.getElementById('restart-button').hidden = false;
}

const restart = () => {
    player.health = 300;
    opponent.health = 300;
    document.getElementById('game-message').innerText = "";
    document.getElementById('attack-button').hidden = false;
    document.getElementById('heal-button').hidden = false;
    document.getElementById('restart-button').hidden = true;
    printToScreen();
}

const printToScreen = () => {
    document.getElementById('player-health').innerText = player.health;
    document.getElementById('opponent-health').innerText = opponent.health;
}

printToScreen();*/



