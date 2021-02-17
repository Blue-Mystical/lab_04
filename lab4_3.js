function toggleState(event) {
    tilelist.forEach(convert);
}

function convert(tile) {
    if (tile.classList.contains('black')) {
        tile.classList.remove("black");
        tile.classList.add("white");
    }
    else if (tile.classList.contains('white')) {
        tile.classList.remove("white");
        tile.classList.add("black");
    }
}

let table = document.querySelector('#table');
let tilelist = document.querySelectorAll('.tile');
table.addEventListener('click', toggleState); 