for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll(".wow")[i].addEventListener("click", function () {

        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
  
    
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
    
});

function makeSound(key){
    switch (key) {
        case "w":
            console.log("salom")
            let first = new Audio("sounds/tom-3.mp3");
            first.play();
            break;
        case "a":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "s":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "d":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "j":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            let kickBass = new Audio('sounds/kickBass.mp3');
            kickBass.play();
            break;

        default:
            console.log(buttonInnerHtml)
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);  
    
}