for (var i = 0; i < document.querySelectorAll("button").length; i++) {    
      document.querySelectorAll("button")[i].addEventListener("click", function (){
          sound(this.innerHTML); // This represents the element that is recieving the event. 
          buttonAnimation(this.innerHTML);
        //   console.log(this);
     });
}

document.addEventListener("keydown", function (event) { // Event is an object with the information about the event that is happening.

    sound(event.key);
    buttonAnimation(event.key);
    // console.log(event.key);
});


function sound (drumKey) {

    function AudioP(audioFile) {
        this.audioFile = audioFile;
        this.play = function () {
            var playSound = new Audio(audioFile);
            playSound.play();
        }
    }

    var w = new AudioP("sounds/tom-1.mp3");
    var a = new AudioP("sounds/tom-2.mp3");
    var s = new AudioP("sounds/tom-3.mp3");
    var d = new AudioP("sounds/tom-4.mp3");
    var j = new AudioP("sounds/snare.mp3");
    var k = new AudioP("sounds/crash.mp3");
    var l = new AudioP("sounds/kick-bass.mp3");


    switch (drumKey) {
        case "w":
            w.play();
            break
        case "a":
            a.play();
            break
        case "s":
            s.play();
            break
        case "d":
            d.play();
            break
        case "j":
            j.play();
            break
        case "k":
            k.play();
            break
        case "l":
            l.play();
            break
        default:
            console.log(this.innerHTML)
            break;
    }
};

function buttonAnimation (classKey) {
    var pressedButton = document.querySelector("." + classKey);
    pressedButton.classList.add("pressed");

    setTimeout(() => {
        pressedButton.classList.remove("pressed");
    }, 70 );
};

