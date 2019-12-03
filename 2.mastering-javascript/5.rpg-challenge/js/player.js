let player;
 
function Player(classType, health, attack, speed) {
    this.classType = classType;
    this.health = health;
    this.attack = attack;
    this.speed = speed;
    
    
}

let playerMoves = {
    let calcAttack = function() {
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
    }
    // player attacks
    let playerAttack = function() {
        let calcBaseDamage;
        calcBaseDamage = player.attack * player.speed / 100;
    
    let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    return calcOutputDamage;
    } 

    // enemy attacks
    let enemyAttack = function() {
        let calcBaseDamage;
        calcBaseDamage = enemy.attack * enemy.speed / 100;

    let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    return calcOutputDamage;
    }

    // health
    let getPlayerHealth = document.querySelector(".health-player")
    let getEnemyHealth = document.querySelector(".enemy-player")

    // player turn
    if (getPlayerSpeed >= getEnemySpeed) {
        let playerAttackValues = playerAttack();
        enemy.health = enemy.health - calcOutputDamage;
        alert("You hit")
        if (enemy.health <= O) {
            alert("You win !!")
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
        } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            // enemy turn
            let enemyAttackValues = enemyAttack();
            player.health = player.health - calcOutputDamage;
        if (player.health <= O) {
            alert("You lose !!")
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            getPlayerHealth.innerHTML = 'Health: 0';
        }   else {
            getPlayerHealth.innerHTML = 'Health: ' + player
        } 
        }
     

    } else  if (getEnemySpeed >= getPlayerSpeed) {
        let playerAttackValues = enemyAttack();
        player.health = player.health - calcOutputDamage;
        alert("Enemy hit")
        if (player.health <= O) {
            alert("You Lose !!")
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            getPlayerHealth.innerHTML = 'Health: 0';
        } else {
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            // player  turn
            let playerAttackValues = playerAttack();
            enemy.health = enemy.health - calcOutputDamage;
            alert("Enemy hit")
        if (plenemyayer.health <= O) {
            alert("You win !!")
            getPLayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
        }   else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        } 
        }
     

    }
}
 
