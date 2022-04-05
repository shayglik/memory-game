const cards = ["A", "B", "C", "A","B","C"];


// const element = document.createElement("div");

// element.innerHTML="fddfgdg";

// const board = document.getElementById("board");

// board.appendChild(element);


function creatCard(idx){
    const element = document.createElement("div");
        element.innerHTML=cards[idx]
        element.id = idx
        element.className = "card"
        return element
}

function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
  }


function newCards(cards){
    shuffleArray(cards)
    const board = document.getElementById("board");
    for (i in cards){
        // const element = document.createElement("div");
        // element.innerHTML=cards[i];
        let element = creatCard(i)
        board.appendChild(element);    
    }
}

newCards(cards)
