function Person(name,race,item,target){
    this.name = name;
    this.race = race;
    this.item = item;
    this.target = target;
    this.currenthealth = 100;
    this.maxHealth = 100;
    if (this.race == 'orc') {
        this.maxHealth = 120;
        this.currenthealth = 120;
    }
    this.dodgechance = 5
    this.minD = 8;
    this.minH = 4
    this.maxDamage = 20;
    this.maxHealing = 24;
    if (this.item == 'sword') {
        this.minD += 2;
        this.maxDamage += 6;
    }
    
    if (this.item == 'staff') {
        this.minH += 1;
        this.maxHealing += 6;
    }
    if (this.race == "human") {
        this.maxHealth += 10;
        this.currenthealth += 10;
        this.dodgechance += 5;
    }
    if (this.race =="elf") {
        this.dodgechance += 10;
    }
    if (this.item == "knife") {
        this.dodgechance += 6
    }
    this.doDamage = function() {

        let chance = this.target.dodgechance;
        let n = Math.floor(Math.random() * 101);
        let damage 
        console.log(n)
        if (n < chance) {
            log.insertAdjacentHTML("afterbegin",`${this.target.name} dodged the attack.`+"<br>");
               
            }   
         else {
            damage = (Math.round(Math.random()*(this.maxDamage - this.minD +1))+this.minD);
            this.target.currenthealth -= damage ;
            log.insertAdjacentHTML("afterbegin",`${this.name} did ${damage} damage to ${this.target.name}.`+"<br>");
       
            }   
            if (this.race == "vampire") {
                if (this.currenthealth >= this.maxHealth) {
                    this.currenthealth = this.maxHealth;
                }else{
                    this.currenthealth += Math.ceil(damage/5)
                    log.insertAdjacentHTML("afterbegin",`${this.name} stole ${Math.ceil(damage/5)} health from ${this.target.name} .`+"<br>")
                }
                
            }
            if (this.item == 'bow') {
                let r = Math.random() * 100;
                if (r < 20) {
                    damage = (Math.round(Math.random()*(this.maxDamage - this.minD +1))+this.minD);
                    this.target.currenthealth -= damage ;
                    log.insertAdjacentHTML("afterbegin",`${this.name} attacked again, and did ${damage} damage to ${this.target.name}.`+"<br>");
                    if (this.race == "vampire") {
                        if (this.currenthealth >= this.maxHealth) {
                            this.currenthealth = this.maxHealth;
                        }else{
                            this.currenthealth += Math.ceil(damage/5)
                            log.insertAdjacentHTML("afterbegin",`${this.name} stole ${Math.ceil(damage/5)} health from ${this.target.name} .`+"<br>")
                        }
                    }
                }
            }
        }
        
    // game end
        if (this.currenthealth <= 0) {
            Endgame(this.target);
            
        } 
    
    this.doHeal = function() {
        let heal = (Math.round(Math.random()*(this.maxHealing - this.minH +1))+this.minH);
        this.currenthealth += heal
        log.insertAdjacentHTML("afterbegin",`${this.name} healed for ${heal}.`+"<br>");
        if (this.currenthealth >= this.maxHealth) {
            this.currenthealth = this.maxHealth;
        }
        updatehealth();
    }
    this.doYield = function () {
        log.insertAdjacentHTML("afterbegin", `${this.name} has yielded.`+"<br>");
        document.getElementById('title').innerHTML = "GAME OVER"
        if (soundon == true) {
            document.getElementById("winsound").play();   
        }
    }
}

// player creation
document.getElementById('start').addEventListener('click',Createplayers);
let player1;
let player2;

let log = document.getElementById("log");
function Createplayers(){
    let race1 = document.getElementById('race1').value;
    let name1 = document.getElementById('name1').value;
    if (document.getElementById('name1').value == '') {
        name1='Player1'
    }
    let target1
    let weapon1 = document.getElementById('weapon1').value;
    player1 = new Person(name1,race1,weapon1,target1);
    switch (player1.race) {
        case 'human':
            document.getElementById('displayrace1').src ='img/human.jpg'
            document.getElementById('displayrace1C').innerHTML = 'Human'    
        break;
    
        case "orc":
            document.getElementById('displayrace1').src ='img/orc.jpg'
            document.getElementById('displayrace1C').innerHTML = 'Orc'    
        break;
        case "elf":
            document.getElementById('displayrace1').src ='img/elf.jpg'
            document.getElementById('displayrace1C').innerHTML = 'Elven'    
        break;
        case 'vampire':
            document.getElementById('displayrace1').src ='img/vampire.jpg' 
            document.getElementById('displayrace1C').innerHTML = 'Vampire'   
        break;

    }
    switch (player1.item) {
        case 'knife':
            document.getElementById('displayitem1').src ='img/knife.png'  
            document.getElementById('displayitem1C').innerHTML = 'Knife'    
        break;
    
        case "staff":
            document.getElementById('displayitem1').src ='img/staff.png'
            document.getElementById('displayitem1C').innerHTML = 'Staff'    
        break;
        case "sword":
            document.getElementById('displayitem1').src ='img/sword.jpg'
            document.getElementById('displayitem1C').innerHTML = 'Sword'    
        break;
        case 'bow':
            document.getElementById('displayitem1').src ='img/bow.jpg'  
            document.getElementById('displayitem1C').innerHTML = 'Bow'  
        break;

    }
    document.getElementById('named1').innerHTML= name1
    let race2 = document.getElementById('race2').value;
    let name2 = document.getElementById('name2').value;
    if (document.getElementById('name2').value == '') {
        name2='Player2'
    }
    let target2
    let weapon2 = document.getElementById('weapon2').value;
    player2 = new Person(name2,race2,weapon2,target2);
    switch (player2.race) {
        case 'human':
            document.getElementById('displayrace2').src ='img/human.jpg' 
            document.getElementById('displayrace2C').innerHTML = 'Human'  
        break;
    
        case "orc":
            document.getElementById('displayrace2').src ='img/orc.jpg'  
            document.getElementById('displayrace2C').innerHTML = 'Orc'   
        break;
        case "elf":
            document.getElementById('displayrace2').src ='img/elf.jpg'   
            document.getElementById('displayrace2C').innerHTML = 'Elf'  
        break;
        case 'vampire':
            document.getElementById('displayrace2').src ='img/vampire.jpg' 
            document.getElementById('displayrace2C').innerHTML = 'Vampire'    
        break;

    }
    switch (player2.item) {
        case 'knife':
            document.getElementById('displayitem2').src ='img/knife.png'   
            document.getElementById('displayitem2C').innerHTML = 'Knife'  
        break;
    
        case "staff":
            document.getElementById('displayitem2').src ='img/staff.png'   
            document.getElementById('displayitem2C').innerHTML = 'Staff'
        break;
        case "sword":
            document.getElementById('displayitem2').src ='img/sword.jpg'   
            document.getElementById('displayitem2C').innerHTML = 'Sword'
        break;
        case 'bow':
            document.getElementById('displayitem2').src ='img/bow.jpg'  
            document.getElementById('displayitem2C').innerHTML = 'Bow'    
        break;
    }
    player1.target = player2;
    player2.target = player1;
    document.getElementById('named2').innerHTML= name2;
    document.getElementById('create').style.display = 'none';
    document.getElementById('start').style.display = 'none';
    document.getElementById('title').innerHTML = "  FIGHT!";
    document.getElementById("arena").style.display = "flex";
    document.getElementById('attack2').addEventListener("click",a2);
    document.getElementById('attack1').addEventListener("click",a1);
    document.getElementById('heal1').addEventListener("click",h1);
    document.getElementById('heal2').addEventListener("click",h2);
    log.insertAdjacentHTML("afterbegin",`${player1.name} is a ${player1.race}, he wields a ${player1.item}, his total health points are ${player1.maxHealth}.`+"<br>");
    log.insertAdjacentHTML("afterbegin",`${player2.name} is a ${player2.race}, he wields a ${player2.item}, his total health points are ${player2.maxHealth}.`+"<br>");
    updatehealth();
    console.log(player1,player2);
    
}
//update healthbar
function updatehealth() {
    document.getElementById("health1").value = player1.currenthealth;
    document.getElementById("health1").max = player1.maxHealth;
    document.getElementById("health2").value = player2.currenthealth;
    document.getElementById("health2").max = player2.maxHealth;
    document.getElementById("healthtext1").innerHTML = `${player1.currenthealth}/${player1.maxHealth}`;
    document.getElementById("healthtext2").innerHTML = `${player2.currenthealth}/${player2.maxHealth}`
}
//damage
let turn = true
function a1() {
    turn = true;
    Damage();
    updatehealth();
    document.getElementById('heal1').removeEventListener("click",h1);
    document.getElementById('heal2').addEventListener("click",h2);
    document.getElementById('attack1').removeEventListener("click",a1);
    document.getElementById('attack2').addEventListener("click",a2);
    document.getElementById("point1").style.display = "none"
    document.getElementById("point2").style.display = "inline"
};
function a2 () {
    turn = false;
    Damage();
    updatehealth()
    document.getElementById('attack2').removeEventListener("click",a2);
    document.getElementById('attack1').addEventListener("click",a1);
    document.getElementById('heal2').removeEventListener("click",h2);
    document.getElementById('heal1').addEventListener("click",h1);
    document.getElementById("point2").style.display = "none"
    document.getElementById("point1").style.display = "inline"
};

function Damage() {
    let you
    let enemy
    if (turn== true) {
        you = player1;
        enemy = player2;
    }
    if (turn == false) {
        you = player2;
        enemy = player1;
    }
    let chance = enemy.dodgechance;
    let n = Math.floor(Math.random() * 101);
    let damage 
    console.log(n)
    if (n < chance) {
        log.insertAdjacentHTML("afterbegin",`${enemy.name} dodged the attack.`+"<br>");      
    } else {
        damage = (Math.round(Math.random()*(you.maxDamage - you.minD +1))+you.minD);
        enemy.currenthealth -= damage ;
        log.insertAdjacentHTML("afterbegin",`${you.name} did ${damage} damage to ${enemy.name}.`+"<br>");
        if (you.race == "vampire") {
            if (you.currenthealth >= you.maxHealth) {
                you.currenthealth = you.maxHealth;
            }else{
                you.currenthealth += Math.ceil(damage/5)
                log.insertAdjacentHTML("afterbegin",`${you.name} stole ${Math.ceil(damage/5)} health from ${enemy.name} .`+"<br>")
            }
            
        }
        if (you.item == 'bow') {
            let r = Math.random() * 100;
            if (r < 20) {
                damage = (Math.round(Math.random()*(you.maxDamage - you.minD +1))+you.minD);
                enemy.currenthealth -= damage ;
                log.insertAdjacentHTML("afterbegin",`${you.name} attacked again, and did ${damage} damage to ${enemy.name}.`+"<br>");
                if (you.race == "vampire") {
                    if (you.currenthealth >= you.maxHealth) {
                        you.currenthealth = you.maxHealth;
                    }else{
                        you.currenthealth += Math.ceil(damage/5)
                        log.insertAdjacentHTML("afterbegin",`${you.name} stole ${Math.ceil(damage/5)} health from ${enemy.name} .`+"<br>")
                    }
                }
            }
        }
    }
    

// game end
    if (enemy.currenthealth <= 0) {
        Endgame(enemy);
        
    }
}
function Endgame(enemy) {
    if (enemy == player1) {
        log.insertAdjacentHTML("afterbegin",`${player2.name} has won`+"<br>");
    }
    else {
        log.insertAdjacentHTML("afterbegin",`${player1.name} has won`+"<br>");
    }
    document.getElementById('title').innerHTML = "GAME OVER"
    setTimeout(() => {
        document.getElementById('create').style.display = 'flex'
        document.getElementById('start').style.display = 'inline'
        document.getElementById('title').innerHTML = "Choose Your Fighter"
        document.getElementById("arena").style.display = "none"
        document.getElementById("point2").style.display = "inline"
        document.getElementById("point1").style.display = "inline"
    }, 3000);

}
//heal
function h1() {
    turn = true;
    Heal();
    updatehealth()
    document.getElementById('heal1').removeEventListener("click",h1);
    document.getElementById('heal2').addEventListener("click",h2);
    document.getElementById('attack1').removeEventListener("click",a1);
    document.getElementById('attack2').addEventListener("click",a2);
    document.getElementById("point1").style.display = "none"
    document.getElementById("point2").style.display = "inline"
};
function h2() {
    turn = false;
    Heal();
    updatehealth()
    document.getElementById('heal2').removeEventListener("click",h2);
    document.getElementById('heal1').addEventListener("click",h1);
    document.getElementById('attack2').removeEventListener("click",a2);
    document.getElementById('attack1').addEventListener("click",a1);
    document.getElementById("point2").style.display = "none"
    document.getElementById("point1").style.display = "inline"
};
function Heal() {
    let you
    if (turn== true) {
        you = player1;
    }
    if (turn == false) {
        you = player2;
    }
    let heal = (Math.round(Math.random()*(you.maxHealing - you.minH +1))+you.minH);
    you.currenthealth += heal
    log.insertAdjacentHTML("afterbegin",`${you.name} healed for ${heal}.`+"<br>");
    if (you.currenthealth >= you.maxHealth) {
        you.currenthealth = you.maxHealth;
    }
}
//yield
document.getElementById('yield1').addEventListener("click",function () {
    log.insertAdjacentHTML("afterbegin", `${player1.name} has yielded.`+"<br>");
    document.getElementById('title').innerHTML = "GAME OVER"
    setTimeout(() => {
        document.getElementById('create').style.display = 'flex'
        document.getElementById('start').style.display = 'inline'
        document.getElementById('title').innerHTML = "Choose Your Fighter"
        document.getElementById("arena").style.display = "none" 
        document.getElementById("point2").style.display = "inline"
        document.getElementById("point1").style.display = "inline"
    }, 3000);
    
});
document.getElementById('yield2').addEventListener("click",function () {
    log.insertAdjacentHTML("afterbegin", `${player2.name} has yielded.`+"<br>");
    document.getElementById('title').innerHTML = "GAME OVER"
    setTimeout(() => {
        document.getElementById('create').style.display = 'flex'
        document.getElementById('start').style.display = 'inline'
        document.getElementById('title').innerHTML = "Choose Your Fighter"
        document.getElementById("arena").style.display = "none" 
        document.getElementById("point2").style.display = "inline"
        document.getElementById("point1").style.display = "inline"
    }, 3000);
});
