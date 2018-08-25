let pic1 = document.createElement("img");
img.src = "pic1.jpg";
var src = document.getElementById("x");
src.appendChild(img);
let pic2 = document.createElement("img");
img.src = "pic2.jpg";
var src = document.getElementById("x");
src.appendChild(img);
let pic3 = document.createElement("img");
img.src = "pic3.jpg";
var src = document.getElementById("x");
src.appendChild(img);
let pic4 = document.createElement("img");
img.src = "pic4.jpg";
var src = document.getElementById("x");
src.appendChild(img);
let pic5 = document.createElement("img");
img.src = "pic5.jpg";
var src = document.getElementById("x");
src.appendChild(img);
let pic6 = document.createElement("img");
img.src = "pic6.jpg";
var src = document.getElementById("x");

let cards = [pic1,pic1,pic2,pic2,pic3,pic3,pic4,pic4,pic5,pic5,pic6,pic6];































function shuffle(cards) {
    let x = null;
    //if eventListener startButton...
    for(let i = 0; i < cards.length; i++){
        //generates random number rounded down 0-11:
        x = math.floor(math.random() * 12);
        output += '<div id="card' + x + '"></div>';
        return board.innerHTML = output;
    }
}