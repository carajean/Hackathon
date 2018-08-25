



















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