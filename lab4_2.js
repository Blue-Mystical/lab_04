let isHidden = true;

function onOuter(event) {
    outer.classList.add("active");
    console.log("Outer ON");
}
function onInner(event) {
    inner.classList.add("active");
    console.log("Inner ON");
}
function resetBox(event) {
    outer.classList.remove("active");
    inner.classList.remove("active");
}

let outer = document.querySelector('#outer')
let inner = document.querySelector('#inner')
let resetbutton = document.querySelector('.reset')
outer.addEventListener('click', onOuter);
inner.addEventListener('click', onInner);
resetbutton.addEventListener('click', resetBox); 