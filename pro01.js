const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z'];


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
        let element = creatCard(i)
        board.appendChild(element);    
    }
}

newCards(cards)
