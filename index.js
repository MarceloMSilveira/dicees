function playDicee() {
    return Math.floor(6*Math.random()+1);
}

function getImageName(imgNr){
    var imageName = "dice";
    imageName = imageName + imgNr + ".png";
    return imageName;
}

function checkWinner(Nr1,Nr2){
    if (Nr1>Nr2) {
        return 1;
    } else if (Nr1<Nr2) {
        return 2;
    } else {
        return 0; //draw
    }
}

var randonNumber1 = playDicee();
var randonNumber2 = playDicee();

for (var i=1; i<7; i++){
    if (i===randonNumber1){
        var imageName = getImageName(i);
        imageName = "./images/"+imageName;
        document.querySelector(".img1").setAttribute("src",imageName);
    }

    if (i===randonNumber2){
        var imageName = getImageName(i);
        imageName = "./images/"+imageName;
        document.querySelector(".img2").setAttribute("src",imageName);
    }
}

//check winner player or if is a draw
var winner = checkWinner(randonNumber1,randonNumber2);

if (winner===0) {
    document.querySelector("h1").innerText = "Draw."
} else if (winner===1) {
    document.querySelector("h1").innerText = "Player 1 Wins!"
} else {
    document.querySelector("h1").innerText = "Player 2 Wins!"
}
