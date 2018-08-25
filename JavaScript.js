//board
let board = document.getElementById('board');

//card variables
let pic1 = document.createElement("img");
img.src = "pic1.jpg";
pic1.id = "cardStyle1";
board.appendChild(pic1);

let pic2 = document.createElement("img");
img.src = "pic1.jpg";
pic1.id = "cardStyle2";
board.appendChild(pic2);

let pic3 = document.createElement("img");
img.src = "pic2.jpg";
pic1.id = "cardStyle3";
board.appendChild(pic3);

let pic4 = document.createElement("img");
img.src = "pic2.jpg";
pic1.id = "cardStyle4";
board.appendChild(pic4);

let pic5 = document.createElement("img");
img.src = "pic3.jpg";
pic1.id = "cardStyle5";
board.appendChild(pic5);

let pic6 = document.createElement("img");
img.src = "pic3.jpg";
pic1.id = "cardStyle6";
board.appendChild(pic6);

let pic7 = document.createElement("img");
img.src = "pic4.jpg";
pic1.id = "cardStyle7";
board.appendChild(pic7);

let pic8 = document.createElement("img");
img.src = "pic4.jpg";
pic1.id = "cardStyle8";
board.appendChild(pic8);

let pic9 = document.createElement("img");
img.src = "pic5.jpg";
pic1.id = "cardStyle9";
board.appendChild(pic9);

let pic10 = document.createElement("img");
img.src = "pic5.jpg";
pic1.id = "cardStyle10";
board.appendChild(pic10);

let pic11 = document.createElement("img");
img.src = "pic6.jpg";
pic1.id = "cardStyle11";
board.appendChild(pic11);

let pic12 = document.createElement("img");
img.src = "pic6.jpg";
pic1.id = "cardStyle12";
board.appendChild(pic12);

//cards array
let pics = [pic1,pic1,pic2,pic2,pic3,pic3,pic4,pic4,pic5,pic5,pic6,pic6];

//buttons
let start = document.getElementById("buttonStart");
start.addEventListener('click',addFunction);
let newGame = document.getElementById("buttonNew");
newGame.addEventListener('click',addFunction);

//cards to click
let card1 = document.getElementById("cardStyle1");
card1.addEventListener('click',turnCard);
let card2 = document.getElementById("cardStyle2");
card2.addEventListener('click',turnCard);
let card3 = document.getElementById("cardStyle3");
card3.addEventListener('click',turnCard);
let card4 = document.getElementById("cardStyle4");
card4.addEventListener('click',turnCard);
let card5 = document.getElementById("cardStyle5");
card5.addEventListener('click',turnCard);
let card6 = document.getElementById("cardStyle6");
card6.addEventListener('click',turnCard);
let card7 = document.getElementById("cardStyle7");
card7.addEventListener('click',turnCard);
let card8 = document.getElementById("cardStyle8");
card8.addEventListener('click',turnCard);
let card9 = document.getElementById("cardStyle9");
card9.addEventListener('click',turnCard);
let card10 = document.getElementById("cardStyle10");
card10.addEventListener('click',turnCard);
let card11 = document.getElementById("cardStyle11");
card11.addEventListener('click',turnCard);
let card12 = document.getElementById("cardStyle12");
card12.addEventListener('click',turnCard);

function shuffle() {
    let x = null;
    //if eventListener startButton...
    for(let i = 0; i < cards.length; i++){
        //generates random number rounded down 0-11:
        x = math.floor(math.random() * 12);
        output += '<div id="card' + x + '"></div>';
        // return board.innerHTML = output;
    }
    console.log(x);
}

function turnCard(){
    //if the card is clicked, the card needs to be turned over and reveal the resulting array.
    if(card1.src === "background"){
        card1.src = pics[0];
    } else {
        card1.src = "background"
    }
    if(card2.src === "background"){
        card2.src = pics[1];
    } else {
        card2.src = "background"
    }
    if(card3.src === "background"){
        card3.src = pics[2];
    } else {
        card3.src = "background"
    }
    if(card4.src === "background"){
        card4.src = pics[3];
    } else {
        card4.src = "background"
    }
    if(card5.src === "background"){
        card5.src = pics[4];
    } else {
        card5.src = "background"
    }
    if(card6.src === "background"){
        card6.src = pics[5];
    } else {
        card6.src = "background"
    }
    if(card7.src === "background"){
        card7.src = pics[6];
    } else {
        card7.src = "background"
    }
    if(card8.src === "background"){
        card8.src = pics[7];
    } else {
        card8.src = "background"
    }
    if(card9.src === "background"){
        card9.src =pics[8];
    } else {
        card9.src = "background"
    }
    if(card10.src === "background"){
        card10.src = pics[9];
    } else {
        card10.src = "background"
    }
    if(card11.src === "background"){
        card11.src = pics[10];
    } else {
        card11.src = "background"
    }
    if(card12.src === "background"){
        card12.src = pics[11];
    } else {
        card12.src = "background"
    }
}

console.log(shuffle(cards));
