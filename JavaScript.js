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
        // return board.innerHTML = output;
    }
    console.log(x);
}

console.log(shuffle(cards));
