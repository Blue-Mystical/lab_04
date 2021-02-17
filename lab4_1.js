let isHidden = true;

function toggleHidden(event) {
    if (isHidden) {
        isHidden = false;
        toggle.textContent = "↓ Hide Content"
        elem.classList.remove('hidden')
    }
    else {
        isHidden = true;
        toggle.textContent = "→ Show Content"
        elem.classList.add('hidden')
    }
}
let elem = document.querySelector('.text')
let toggle = document.querySelector('.button');
toggle.addEventListener('click', toggleHidden);

