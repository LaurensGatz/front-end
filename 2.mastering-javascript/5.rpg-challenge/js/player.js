let Player = new Player ();
let Enemy = new Enemy ();

function Enemy(enemyType, health, attack, speed) {
    this.enemyType = enemyType;
    this.health = health;
    this.attack = attack;
    this.speed = speed;
}
function Player(classType, health, attack, speed) {
    this.classType = classType;
    this.health = health;
    this.attack = attack;
    this.speed = speed;
    
    
}
let getPlayerSpeed = Player.speed;
let getEnemySpeed = Enemy.speed;
let playerMoves = [];

    let calcAttack = function () {
        
    }
    playerMoves.push(calcAttack);


    
   // player attacks
    let playerAttack = function() {
        let calcBaseDamage;
        calcBaseDamage = Player.attack * Player.speed / 100;
        
    
    let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    return calcOutputDamage;
    } 
    playerMoves.push(playerAttack);

    // enemy attacks
    let enemyAttack = function() {
        let calcBaseDamage;
        calcBaseDamage = Enemy.attack * Enemy.speed / 100;

        

    let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    return calcOutputDamage;
    }
    playerMoves.push(enemyAttack);

    // health
    let getPlayerHealth = document.querySelector(".health-player")
    let getEnemyHealth = document.querySelector(".enemy-player")

    // player turn
    if (getPlayerSpeed >= getEnemySpeed) {
        let damage = playerAttack();
        Enemy.health = Enemy.health - damage;
        alert("You hit")
        if (Enemy.health <= O) {
            alert("You win !!")
            getPlayerHealth.innerHTML = 'Health: ' + Player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
        } else {
            getEnemyHealth.innerHTML = 'Health: ' + Enemy.health;
            // enemy turn
            let enemyAttackValues = enemyAttack();
            Player.health = Player.health - calcOutputDamage;
        if (Player.health <= O) {
            alert("You lose !!")
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            getPlayerHealth.innerHTML = 'Health: 0';
        }   else {
            getPlayerHealth.innerHTML = 'Health: ' + player
        } 
        }
     

    } else  if (getEnemySpeed >= getPlayerSpeed) {
        let playerAttackValues = enemyAttack();
        Player.health = Player.health - calcOutputDamage;
        alert("Enemy hit")
        if (Player.health <= O) {
            alert("You Lose !!")
            getEnemyHealth.innerHTML = 'Health: ' + Enemy.health;
            getPlayerHealth.innerHTML = 'Health: 0';
        } else {
            getPlayerHealth.innerHTML = 'Health: ' + Player.health;
            // player  turn
            let playerAttackValues = playerAttack();
            Enemy.health = Enemy.health - calcOutputDamage;
            alert("Enemy hit")
        if (Enemy.health <= O) {
            alert("You win !!")
            getPLayerHealth.innerHTML = 'Health: ' + Player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
        }   else {
            getEnemyHealth.innerHTML = 'Health: ' + Enemy.health;
        } 
        }
     

    }

 
