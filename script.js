var audio1 = document.getElementById("myAudio1");
var audio2 = document.getElementById("myAudio2");
var audio3 = document.getElementById("myAudio3");
var audio4 = document.getElementById("myAudio4");
var audio5 = document.getElementById("myAudio5");
var audio6 = document.getElementById("myAudio6");
var audio7 = document.getElementById("myAudio7");
var audio = document.getElementById("song");
var soundsList = []

function playAudio(path) {
    switch (path) {
        case "crash":
            audio1.play();
            break;
        case "tom-3":
            audio2.play();
            break;
        case "tom-4":
            audio3.play();
            break;
        case "kick-bass":
            audio4.play();
            break;
        case "snare":
            audio5.play();
            break;
        case "tom-1":
            audio6.play();
            break;
        case "tom-2":
            audio7.play();
            break;
    }
    soundsList.push(path);
}

function display() {
    alert("There you GO");
}

function play_all() {
    if (soundsList.length > 0) {
        audio.src = "./sound/" + soundsList[0] + ".mp3";
        audio.play();
        let index = 1
        audio.onended = function() {
            if (index < soundsList.length) {
                audio.src = "./sound/" + soundsList[index] + ".mp3";
                audio.play();
                index++;
            }
        };

    } else {
        alert("No Sound track found!");
    }

}

function clearme() {
    soundsList = []
    alert("Sound track cleared!");
}