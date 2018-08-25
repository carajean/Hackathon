//cards
let pic1 = document.createElement("img");
img.src = "pic1.jpg";
var src = document.getElementById("cardStyle1");
src.appendChild(img);
let pic2 = document.createElement("img");
img.src = "pic2.jpg";
var src = document.getElementById("cardStyle2");
src.appendChild(img);
let pic3 = document.createElement("img");
img.src = "pic3.jpg";
var src = document.getElementById("cardStyle3");
src.appendChild(img);
let pic4 = document.createElement("img");
img.src = "pic4.jpg";
var src = document.getElementById("cardStyle4");
src.appendChild(img);
let pic5 = document.createElement("img");
img.src = "pic5.jpg";
var src = document.getElementById("cardStyle5");
src.appendChild(img);
let pic6 = document.createElement("img");
img.src = "pic6.jpg";
var src = document.getElementById("cardStyle6");

let cards = [pic1,pic1,pic2,pic2,pic3,pic3,pic4,pic4,pic5,pic5,pic6,pic6];

//buttons
let start = document.getElementById("buttonStart");
start.addEventListener('click',addFunction);
let newGame = document.getElementById("buttonNew");
newGame.addEventListener('click',addFunction);

//cards to click
let card1 = cards[0];
card1.addEventListener('click',addCardFunction);
let card2 = cards[1]
card2.addEventListener('click',addCardFunction);
let card3 = cards[2]
card3.addEventListener('click',addCardFunction);
let card4 = cards[3]
card4.addEventListener('click',addCardFunction);
let card5 = cards[4]
card5.addEventListener('click',addCardFunction);
let card6 = cards[5]
card6.addEventListener('click',addCardFunction);
let card7 = cards[6]
card7.addEventListener('click',addCardFunction);
let card8 = cards[7]
card8.addEventListener('click',addCardFunction);
let card9 = cards[8]
card9.addEventListener('click',addCardFunction);
let card10 = cards[9]
card10.addEventListener('click',addCardFunction);
let card11 = cards[10]
card11.addEventListener('click',addCardFunction);
let card12 = cards[11]
card12.addEventListener('click',addCardFunction);

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

console.log(shuffle(cards));
