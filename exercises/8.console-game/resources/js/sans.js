//*****************Sans VISUAL******** ******** */
let sansArt = document.getElementById('sans');

sansArt.onmouseover = function () {
    sansArt.classList.add('leftEyeWink');
}
sansArt.onmouseleave = function () {
    sansArt.classList.remove('leftEyeWink');
}

//***************TYPEWRITER & PUNS******************** */


function randomPun(list) {
    let pun = list[Math.floor(Math.random() * list.length)];
    document.getElementById("text").innerHTML = ''
    letterI = 0;
    txt = pun;
    typeWriter();
}

let letterI = 0;
let speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (letterI < txt.length) {
        if (txt.charAt(letterI) !== ' ' && soundOn === true) {
            let audio = new Audio('resources/sound/voice_sans.mp3');
            audio.play();
        }
        document.getElementById("text").innerHTML += txt.charAt(letterI);
        letterI++;
        setTimeout(typeWriter, speed);
    }
}

//************** Sound handler****************** */

let soundBut = document.getElementById('sound');
let soundOn = false;

soundBut.onclick = toggleSound;

function toggleSound() {
    if (soundOn == true) {
        soundBut.innerHTML = 'Sound:off';
        soundOn = false;
    } else {
        soundBut.innerHTML = 'Sound:on';
        soundOn = true;
    }
}

//************** Music handler****************** */

let musicBut = document.getElementById('music');
let musicOn = false;
let firstTimeThemeSong = true;
let themesong = new Audio('resources/sound/Megalovania.mp3');

musicBut.onclick = themeSong;

function themeSong() {
        if (musicOn == true) {
            musicBut.innerHTML = 'music:off';
            musicOn = false;
            themesong.muted = true;
        } else if (firstTimeThemeSong == true) {
            musicBut.innerHTML = 'music:on';
            musicOn = true;
            firstTimeThemeSong = false;
            themesong.play();
            themesong.loop = true;
        } else {
            musicBut.innerHTML = 'music:on';
            musicOn = true;
            themesong.muted = false;
        }
}

//************** Other****************** */

startpun = [`Bone to be wild !!!`]
randomPun(startpun);

let dont = [];
dont.push(document.getElementById('d'));
dont.push(document.getElementById('o'));
dont.push(document.getElementById('n'));
dont.push(document.getElementById('t'));


for (let i = 0; i < dont.length; i++) {
    dont[i].onclick = function () {
        let pen = document.createElement('div');
        pen.classList.add('pen');
        document.body.append(pen);
    }
}