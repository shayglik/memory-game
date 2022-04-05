const cards = ["A", "B", "C", "A","B","C"];


// const element = document.createElement("div");

// element.innerHTML="fddfgdg";

// const board = document.getElementById("board");

// board.appendChild(element);

function newCards(cards){
    for (i of cards){
        const element = document.createElement("div");
        element.innerHTML=i;
        const board = document.getElementById("board");
        board.appendChild(element);    
    }
}

newCards(cards)
