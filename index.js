var buttons = document.querySelectorAll("button");

buttons.forEach(function(buttons, index) {
    buttons.addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
});

document.addEventListener("keydown", function(event) {
    var key = event.key.toLowerCase();
    playSound(key);
    buttonAnimation(key);
});

function playSound(key){

    switch(key) {
        case "j":
            playCrash();
            break;
        case "k":
            playKickBass();
            break;
        case "l":
            playSnare();
            break;
        case "w":
            playTom1();
            break;
        case "a":
            playTom2();
            break;
        case "s":
            playTom3();
            break;
        case "d":
            playTom4();
            break;  
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

function playCrash(){
    var audio = new Audio("sounds/crash.mp3")
    audio.play();
}

function playKickBass(){
    var audio = new Audio("sounds/kick-bass.mp3")
    audio.play();
}

function playSnare(){
    var audio = new Audio("sounds/snare.mp3")
    audio.play();
}

function playTom1(){
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play();
}

function playTom2(){
    var audio = new Audio("sounds/tom-2.mp3")
    audio.play();
}

function playTom3(){
    var audio = new Audio("sounds/tom-3.mp3")
    audio.play();
}

function playTom4(){
    var audio = new Audio("sounds/tom-4.mp3")
    audio.play();
}









