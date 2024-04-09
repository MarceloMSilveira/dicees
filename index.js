function playDicee() {
    return Math.floor(6*Math.random()+1);
}

function getImageName(imgNr){
    var imageName = "dice";
    imageName = imageName + imgNr + ".png";
    return imageName;
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
